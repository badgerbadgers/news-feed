import './App.css'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import BBCNewsCard from './News/BBCNewsCard'
import CNN from './News/CNN'
import TechCrunch from './News/TechCrunch'
import Navbar from './Navbar'
import Login from './Login'
import Signup from'./Signup'

/* news feed checklist
  [x] create an app that uses react hooks to get API data and display it on webpage
  [x] create a function or dynamic onclick to change url of API call for different
    news components or create separate API calls for each news source.
  [x] each news card onclick should direct to news source
  [x] for current date create a new component or pass down variable as a prop
  [x] create individual components for each section such as navbar, API displayed, etc
  [x] use browser router to route to different components, use navbar to navigate
  [] create navbar with logo and responsive design
  [] create login page with form validation
  [] create footer component
  [] use font awesome for use in navbar, add cool icons for login link
  */
function App() {
  const [newsData, setNewsData] = useState([]);
  const [newsData2, setData2] = useState([]);
  const [newsData3, setData3] = useState([]);

//set the current date
let today = new Date(),
date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();

//function that gets API data, uses an API key generated by registering at the site url.
  const getData = () => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b4549c94b4464c78855f765a35cae50a';
    // const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-02-13&sortBy=popularity&apiKey=b4549c94b4464c78855f765a35cae50a';
      fetch(url)
      .then(response => response.json())
      .then(response =>  setNewsData(response.articles))
      .catch(error => console.log(error))
    }
  const getData2 = () => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=b4549c94b4464c78855f765a35cae50a';
      fetch(url)
      .then(response => response.json())
      .then(response =>  setData2(response.articles))
      .catch(error => console.log(error))
  }
  const getData3 = () => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4549c94b4464c78855f765a35cae50a';
      fetch(url)
      .then(response => response.json())
      .then(response =>  setData3(response.articles))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getData();
    getData2();
    getData3();
  }, []);
  
  return (
    <div className='container'>
      <Navbar />
        <div className='child'>
          <Routes>
            <Route path="/" element={<BBCNewsCard newsData={newsData} date={date}/>} />
            <Route path="/cnn" element={<CNN date={date} newsData2={newsData2}/> } />
            <Route path="/techcrunch" element={<TechCrunch newsData3={newsData3} date={date}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
