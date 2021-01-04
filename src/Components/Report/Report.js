import './Report.css';

function Report(props) {

    return(
        <div
            className='Report'
        >
            <p
                className='CurrentTemp'
            >
                Its {props.weatherReport.current.temp}F outside right now.
            </p>
            <p
                className='FeelsLike'
            >
                But it feels like {props.weatherReport.current.feels_like}F.
            </p>
        </div>
    );
};

export default Report;