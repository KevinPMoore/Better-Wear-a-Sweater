import config from './config';
//api endpoint for weather
//https://openweathermap.org/api/one-call-api

function getWeather(coords) {
    const lat = coords.lat;
    const lon = coords.lng;
    const API_KEY = config.API_KEY;
    let error;

    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=` + lat + `&lon=` + lon + `&appid=` + API_KEY) 
        .then(res => {
            if(!res.ok) {
                error = {code: res.status};
                if(!res.headers.get('content-type').includes('json')) {
                    return Promise.reject(error)
                }
            }
            return res.json();
        });
};

//api endpoint for lat/lon geocoding
//https://developer.mapquest.com/documentation/open/geocoding-api/
const MapQuestBaseURL = `http://open.mapquestapi.com/geocoding/v1/address?key=5QORAhsoHceo47Wee25gMcA0rJCE2flr&location=`;

function parseLatLong(location) {
    let error;
    const getURL = MapQuestBaseURL+location;
    return fetch(getURL)
        .then(res => {
            if(!res.ok) {
                error = {code: res.status};
                if(!res.headers.get('content-type').includes('json')) {
                    return Promise.reject(error)
                }
            }
            return res.json();
        })
        .then(res => {
            return res.results[0].locations[0].latLng
        });
};

export default {
    getWeather,
    parseLatLong
};