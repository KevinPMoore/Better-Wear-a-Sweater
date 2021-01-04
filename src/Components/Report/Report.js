import './Report.css';

function Report(props) {

    return(
        <div
            className={['Report', props.weatherReport.current.weather[0].main].join(' ')}
        >
            <p
                className='Current'
            >
                Its {props.weatherReport.current.temp}F outside right now. <br/>
                But it feels like {props.weatherReport.current.feels_like}F.
            </p>
            <p
                className='Daily'
            >
                Today's weather will be {props.weatherReport.daily[0].weather[0].main} <br/>
                High: {props.weatherReport.daily[0].temp.max} <br/>
                Low:  {props.weatherReport.daily[0].temp.min} <br/>
                Morning: {props.weatherReport.daily[0].temp.morn} <br/>
                Midday: {props.weatherReport.daily[0].temp.day} <br/>
                Evening: {props.weatherReport.daily[0].temp.eve} <br/>
                Night: {props.weatherReport.daily[0].temp.night} <br/>
            </p>
        </div>
    );
};

export default Report;