import React, { useState } from 'react';
import Utils from '../../Utils';
import './LandingForm.css';

function LandingForm(props) {
    const [ location, setLocation ] = useState('');
    const [ coordinates, setCoordinates ] = useState({});

    function handleLocation(ev) {
        setLocation(ev.target.value);
    };

    function handleLocationSubmit(ev) {
        ev.preventDefault();
        Utils.parseLatLong(location)
            .then(res => {
                setCoordinates(res)
            })
            .then(() => {
                return props.setWeatherReport(Utils.getWeather(coordinates));
            })
            .then(() => {
                props.confirmWeatherReport();
            });
    };

    return(
        <form
            className='LandingLocationForm'
            onSubmit={handleLocationSubmit}
        >
            <label>
                Location:
                <input
                    type='text'
                    placeholder='Atlanta'
                    onChange={handleLocation}
                    required
                >
                </input>
            </label>
            <button
                type='submit'
            >
                Submit
            </button>
        </form>
    );
};

export default LandingForm;