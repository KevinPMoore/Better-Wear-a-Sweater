import ControlBar from '../Components/ControlBar/ControlBar';
import Report from '../Components/Report/Report';
import Recommendation from '../Components/Recommendation/Recommendation';

function Weather(props) {
    console.log('the weather is ', props.weatherReport)
    return(
        <main>
            <ControlBar/>
            <Report weatherReport={props.weatherReport}/>
            <Recommendation/>
        </main>
    );
};

export default Weather;