import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function TechCrunch(data) {
  return(
    <>
      <h2> TechCrunch Headlines {data.date}</h2>
        {data.newsData3.map(news => {
          return (
          <div className="news-card" key={uuidv4()}>
            <a href={news.url} className="news-card-link">
              <img src={news.urlToImage} className="news-card-image" alt={news.title}></img>
              <h3>{news.title}</h3>
              <p>{news.description}</p></a>
          </div>
          )
        })}
    </>
   )
}

export default TechCrunch;