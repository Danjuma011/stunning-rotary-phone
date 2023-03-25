// useState  

// import {useState} from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0)
//     return (
//       <div className="App">
//         <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
//       </div>
//   );
// }

// export default App;



// import {useState, useEffect} from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert("you've changed your counter to" + counter);
//   }, [counter]) 
//     return (
//       <div className="App">
//         <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
//       </div>
//   );
// }

// export default App;



// import {useEffect} from 'react';
// import './App.css';


// // 386ea62d

// const API_URL = 'http://www.omdbapi.com?apikey=386ea62d';


// const App = () => {

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     console.log(data.Search);
//   }

//   useEffect(() => {
//     searchMovies("Spiderman")
//   }, []);



//     return (
//       <div className='app'>
//         <h1>MovieLand</h1>

//         <i class="fa-solid fa-magnifying-glass"></i>
//         <i class="fa-solid fa-magnifying-glass"></i>

//         <div className= 'search'>

//           <input placeholder='Search for movies'  
//           value='Superman'
//           onchange={() => {}} 
//           > 

//           </input>
//         </div>

//       </div>
//   );
// }

// export default App;


import './App.scss';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


