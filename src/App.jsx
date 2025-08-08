import React, { useEffect, useRef, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { SiCrunchyroll } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa6";
import "./index.css";
import NewsList from './Components/NewsList';

const App = () => {

  const inputRef = useRef();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchNews = async (query) => {
    setIsLoading(true);
    try {
      const url = `https://gnews.io/api/v4/search?q=${query}&max=30&apikey=98e7a37bd3d3a644667e18d94b9cc259`
      const res = await fetch(url);
      const resData = await res.json();
      console.log(resData);
      setArticles(resData.articles)
    } catch (err) {
      console.log("Error Fetching News:", err)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    searchNews('latest');
  }, [])

  return (
    <div className='app-container'>
      <div className='head'>
        <h1><SiCrunchyroll className='news-icon' /><span>TheNews</span>Sphere</h1>
        <h2>World News Highlights</h2>
        <div className="search-container">
          <input type="search" placeholder='Search...' ref={inputRef} />
          <p onClick={() => searchNews(inputRef.current.value)}><IoSearchSharp className='search-icon' /></p>
        </div>
        <ul className="filter">
          <li onClick={() => searchNews('General')}>General</li>
          <li onClick={() => searchNews('India')}>India</li>
          <li onClick={() => searchNews('Technology')}>Technology</li>
          <li onClick={() => searchNews('Sports')}>Sports</li>
          <li onClick={() => searchNews('Health')}>Health</li>
          <li onClick={() => searchNews('Entertainment')}>Entertainment</li>
          <li onClick={() => searchNews('Science')}>Science</li>
          <li onClick={() => searchNews('Weather')}>Weather</li>
          <li onClick={() => searchNews('Education')}>Education</li>
          <li onClick={() => searchNews('Politics')}>Politics</li>
          <li onClick={() => searchNews('Business')}>Business</li>
          <li onClick={() => searchNews('Research')}>Research</li>
        </ul>
      </div>
      { isLoading ? (
        <div className='spinner'>
          <div className="loader"></div>
          <p>Loading News...</p>
        </div>
      ) : (
        <NewsList articles={articles} />
      )}
      <footer>
        <p><FaRegCopyright />2025TheNewsSphere. All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
