import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [randomCatImg, setRandomCatImg] = useState(null);
  const fetchRandomCat = () => {
    setRandomCatImg("");
    const opts = {
      headers: {
        mode: 'no-cors'
      }
    }
    fetch(`http://localhost:8001/random_cat`, opts)
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
