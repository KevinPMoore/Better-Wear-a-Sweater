import Utils from '../../Utils';

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
                className='ControlButton'
                value='metric'
                onClick={updateUnits}
            >
                Celcius
            </button>
            <button
                className='ControlButton'
                value='imperial'
                onClick={updateUnits}
            >
                Farenheit
            </button>
            <button
                className='ControlButton'
                value={'standard'}
                onClick={updateUnits}
            >
                Kelvin
            </button>
        </div>
    );
};

export default ControlBar;