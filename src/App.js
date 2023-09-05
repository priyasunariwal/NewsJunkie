import './App.css';
import React, {useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

const App = (props)=> {
 const apikey = process.env.REACT_APP_NEWS_API
  
 const [progress,setProgresss] = useState(0)
 const pageSize = 8;
  //arrow func bana na padega nhi toh props mein this. karke nhi bhejh payenge
  const setProgress = (progress) =>{
    setProgresss(progress);
  }
  
    return (
     
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height= {3}
        color='#f11946'
        progress={progress}
        
      />

      

        <Routes>
      
          <Route exact path="/"  element = {<News setProgress = {setProgress} apikey = {apikey} key = "general" pageSize={pageSize} country="in" category ="general" />} ></Route>
          
          <Route exact path="/business" element = { <News setProgress = {setProgress} apikey = {apikey}  key = "business" pageSize={pageSize} country="in" category ="business" /> }></Route>
          
          <Route exact path="/entertainment" element = { <News setProgress = {setProgress} apikey = {apikey}  key = "entertainment" pageSize={pageSize} country="in" category ="entertainment" />}></Route>
         
          <Route exact path="/general"  element = { <News setProgress = {setProgress} apikey = {apikey} key = "general" pageSize={pageSize} country="in" category ="general" />}></Route>
          
          <Route exact path="/health"  element ={<News setProgress = {setProgress} apikey = {apikey} key = "health" pageSize={pageSize} country="in" category ="health" />}></Route>
          <Route exact path="/science"  element ={<News setProgress = {setProgress} apikey = {apikey} key = "science" pageSize={pageSize} country="in" category ="science" />}></Route>
          
          <Route exact path="/sports" element = { <News setProgress = {setProgress} apikey = {apikey} key = "sports" pageSize={pageSize} country="in" category ="sports" />}></Route>
          
          <Route exact path="/technology"  element ={  <News setProgress = {setProgress} apikey = {apikey} key = "technology"  pageSize={pageSize} country="in" category ="technology" />}></Route>

          
          </Routes>
       
        </Router>
      </div>
      
   
    )
  
}

 App.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general' 
}
// static propTypes always remember here p is small
App.propTypes = {
       country: PropTypes.string,
       pageSize: PropTypes.number,
       category: PropTypes.string
}
export default App