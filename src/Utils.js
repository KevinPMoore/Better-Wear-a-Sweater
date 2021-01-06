import config from './config';
//api endpoint for weather
//https://openweathermap.org/api/one-call-api

//api endpoint for lat/lon geocoding
//https://developer.mapquest.com/documentation/open/geocoding-api/

function getWeatherForLocation(location, units) {
    const API_KEY = config.API_KEY;
    let error;
    return fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=5QORAhsoHceo47Wee25gMcA0rJCE2flr&location=` + location)
        .then(res=> {
            if(!res.ok) {
                error = { code: res.status };
                if(!res.headers.get('content-type').includes('json')) {
                    return Promise.reject(error)
                }
            }
            return res.json()
        })
        .then(res => {
            return res.results[0].locations[0].latLng
        })
        .then(res => {
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=` + res.lat + `&lon=` + res.lng + `&units=` + units + `&appid=` + API_KEY) 
            .then(res => {
                if(!res.ok) {
                    error = {code: res.status};
                    if(!res.headers.get('content-type').includes('json')) {
                        return Promise.reject(error)
                    }
                }
                return res.json();
            });
        });
}

export default { getWeatherForLocation };