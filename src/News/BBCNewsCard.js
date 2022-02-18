import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function BBCNewsCard(data) {
  //set the current date
// let today = new Date(),
// date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();

 return(
  <>
    <h2> BBC News Headlines For {data.date}</h2>
      {data.newsData.map(news => {
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

export default BBCNewsCard;