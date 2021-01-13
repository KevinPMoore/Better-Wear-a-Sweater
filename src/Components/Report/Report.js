import './Report.css';

/*
Resume work here:
    Fix the wording on the <p> daily so that the first line reads better
*/
function Report(props) {
    function renderWeatherMessage() {
        if(props.weatherReport.current.weather[0].main === props.weatherReport.daily[0].weather[0].main) {
            return('same, same')
        } else {
            return(`Its ${props.weatherReport.current.weather[0].main} right now, but later it will be ${props.weatherReport.daily[0].weather[0].main}`)
        };
    };

    return(
        <div
            className={['Report', props.weatherReport.current.weather[0].icon].join(' ')}
        >
            <p
                className='Temps'
            >
                Its {Math.round(props.weatherReport.current.temp)} outside, but feels like {Math.round(props.weatherReport.current.feels_like)}. <br/>
            </p>
            <p
                className='Weather'
            >
                {renderWeatherMessage()}
            </p>
        </div>
    );
};

export default Report;