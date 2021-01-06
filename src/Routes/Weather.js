import ControlBar from '../Components/ControlBar/ControlBar';
import Report from '../Components/Report/Report';
import MoreInfo from '../Components/MoreInfo/MoreInfo';
import Recommendation from '../Components/Recommendation/Recommendation';

function Weather(props) {
    return(
        <main>
            <ControlBar location={props.location} setWeatherReport={props.setWeatherReport} setWeatherUnits={props.setWeatherUnits}/>
            <Report weatherReport={props.weatherReport}/>
            <MoreInfo/>
            <Recommendation/>
        </main>
    );
};

export default Weather;