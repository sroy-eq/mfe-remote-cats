import PubSub from 'pubsub-js';
import React, { useEffect, useState } from "react";
import './App.css';

const MFE_TOPIC = 'MFE Topic';

function App() {
  const [randomCatImg, setRandomCatImg] = useState(null);
  
  const topicSubscriber = (msg, data) => {
    console.log("Received message in cats MFE");
    console.log("msg: ", msg);
    console.log("data: ", data);
  };
  PubSub.subscribe(MFE_TOPIC, topicSubscriber);

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
  }, [randomCatImg]);

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div>
          <button onClick={() => {
              const randomId = (Math.random() + 1).toString(36).substring(7);
              PubSub.publish(MFE_TOPIC, randomId);
              fetchRandomCat();
            }}>New Cat</button>
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
