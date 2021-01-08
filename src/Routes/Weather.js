import ControlBar from '../Components/ControlBar/ControlBar';
import Report from '../Components/Report/Report';
import MoreInfo from '../Components/MoreInfo/MoreInfo';
import Recommendation from '../Components/Recommendation/Recommendation';

function Weather(props) {
    return(
        <main>
            <ControlBar location={props.location} setWeatherReport={props.setWeatherReport} weatherUnits={props.weatherUnits} setWeatherUnits={props.setWeatherUnits}/>
            <Report weatherReport={props.weatherReport}/>
            <MoreInfo weatherReport={props.weatherReport}/>
            <Recommendation weatherReport={props.weatherReport}/>
        </main>
    );
};

export default Weather;