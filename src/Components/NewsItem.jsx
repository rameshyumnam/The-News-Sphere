import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import "./NewsItem.css";

const NewsItem = ({ article }) => {
    const {
        title,
        urlToImage,
        description,
        url,
        source,
        publishedAt,
    } = article;

    const shortDescription = (text) => {
      if (text.length < 100) {
        return (text + '.');
      } else {
        const words = text.split('').slice(0, 100).join('');
        return (words + '...')
      }
    }

  return (
    <div className='news-card'>
      <img src={urlToImage} alt={title} />
      <div className="article">
        <h3>{shortDescription(title)}</h3>
        <p>{new Date(publishedAt).toLocaleString()}/{source.name}</p>
        <p className='description'>{shortDescription(description)}</p>
        <a href={url}>Read More <FaArrowRightLong /></a>
      </div>
    </div>
  )
}

export default NewsItem
