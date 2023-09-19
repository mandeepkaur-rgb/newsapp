import './App.css';
import React ,{useState} from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
// import NewsItem from './component/NewsItem';
import LoadingBar from 'react-top-loading-bar'
import {Route,Routes,Switch} from "react-router-dom"


const  App =()=> {
  const pageSize ='5'; 

  const [progress, setProgress]=useState(0)
    return (
      // <div>
      // <Navbar/>
      // <News setProgress={setProgress} pageSize={2} country="in" category="science" />
      //  </div>
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route path='/' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
          <Route path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='in' category='technology'/>}></Route>
        </Routes> 
    </div>
       
    )
  }

export default App
