import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Landing from './Routes/Landing';
import Weather from './Routes/Weather';
import './App.css';

function App() {

  const [ hasWeather, setHasWeather ] = useState(false);
  const [ weatherReport, setWeatherReport ] = useState({});

  console.log('hasWeather is ', hasWeather)

  return (
    <div className="App">
      <Header/>
      {hasWeather ? <Weather weatherReport={weatherReport}/> : <Landing setHasWeather={setHasWeather} weatherReport={weatherReport} setWeatherReport={setWeatherReport}/>}
    </div>
  );
};

export default App;