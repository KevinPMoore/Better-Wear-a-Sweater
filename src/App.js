import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Landing from './Routes/Landing';
import Weather from './Routes/Weather';
import './App.css';

function App() {

  const [ hasWeather, setHasWeather ] = useState(false);
  const [ location, setLocation ] = useState('');
  const [ weatherReport, setWeatherReport ] = useState({});
  const [ weatherUnits, setWeatherUnits ] = useState('imperial');

  console.log('initial hasWeather is ', hasWeather);
  console.log('initial weatherUnits is ', weatherUnits);

  return (
    <div className="App">
      <Header hasWeather={hasWeather} setHasWeather={setHasWeather} setWeatherReport={setWeatherReport}/>
      {hasWeather ? <Weather location={location} weatherReport={weatherReport} setWeatherReport={setWeatherReport} weatherUnits={weatherUnits} setWeatherUnits={setWeatherUnits}/> : <Landing setHasWeather={setHasWeather} location={location} setLocation={setLocation} weatherReport={weatherReport} setWeatherReport={setWeatherReport} weatherUnits={weatherUnits}/>}
    </div>
  );
};

export default App;