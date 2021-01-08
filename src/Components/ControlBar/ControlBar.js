import Utils from '../../Utils';
import './ControlBar.css';

function ControlBar(props) {

    function updateUnits(ev) {
        Utils.getWeatherForLocation(props.location, ev.target.value)
        .then(res => {
            props.setWeatherReport(res);
            props.setWeatherUnits(ev.target.value);
        });
    };

    return(
        <div
            className='ControlBar'
        >
            <button
                className={`ControlButton ${props.weatherUnits === 'metric' ? 'metric' : ''}`}
                id='metric'
                value='metric'
                onClick={updateUnits}
            >
                Celcius
            </button>
            <button
                className={`ControlButton ${props.weatherUnits === 'imperial' ? 'imperial' : ''}`}
                id='imperial'
                value='imperial'
                onClick={updateUnits}
            >
                Farenheit
            </button>
            <button
                className={`ControlButton ${props.weatherUnits === 'standard' ? 'standard' : ''}`}
                value='standard'
                id='standard'
                onClick={updateUnits}
            >
                Kelvin
            </button>
        </div>
    );
};

export default ControlBar;