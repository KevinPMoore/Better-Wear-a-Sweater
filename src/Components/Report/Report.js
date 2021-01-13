import './Report.css';

/*
Resume work here:
    Have report <p> current say the current weather in addition to temp
    Fix the wording on the <p> daily so that the first line reads better
*/
function Report(props) {

    return(
        <div
            className={['Report', props.weatherReport.current.weather[0].icon].join(' ')}
        >
            <p
                className='Current'
            >
                Its {Math.round(props.weatherReport.current.temp)} outside right now. <br/>
                But it feels like {Math.round(props.weatherReport.current.feels_like)}.
            </p>
            <p
                className='Daily'
            >
                Today's weather will be {props.weatherReport.daily[0].weather[0].main} <br/>
                High: {Math.round(props.weatherReport.daily[0].temp.max)} <br/>
                Low:  {Math.round(props.weatherReport.daily[0].temp.min)} <br/>
                Morning: {Math.round(props.weatherReport.daily[0].temp.morn)} <br/>
                Midday: {Math.round(props.weatherReport.daily[0].temp.day)} <br/>
                Evening: {Math.round(props.weatherReport.daily[0].temp.eve)} <br/>
                Night: {Math.round(props.weatherReport.daily[0].temp.night)} <br/>
            </p>
        </div>
    );
};

export default Report;