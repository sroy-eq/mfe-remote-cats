import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import GreetingCat from './GreetingCat';
// import RandomCat from './RandomCat';
import './App.css';

// Commented out routing to multiple components to keep it simple for now. 
// const defaultHistory = createBrowserHistory();
// function App(history = defaultHistory) {
//   return (
//     // <Router history={history}>
//     //   <Routes>
//     //     <Route path="/" component={RandomCat} />
//     //     <Route path="/cat/:greeting" component={GreetingCat} />
//     //   </Routes>
//     // </Router>    
//   );
// }

function App() {
  const [randomCatImg, setRandomCatImg] = useState(null);
  const fetchRandomCat = () => {
    setRandomCatImg("");
    fetch(`https://aws.random.cat/meow`)
      .then((res) => res.json())
      .then((catInfo) => {
        setRandomCatImg(catInfo.file);
      });
  };

  useEffect(() => {
    if (randomCatImg === null) {
      fetchRandomCat();
    }
  });

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div>
        {randomCatImg !== "" ? (
          <div>
            <img src={randomCatImg} width="400px" alt="Cat" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;
