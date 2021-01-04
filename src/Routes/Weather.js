import ControlBar from '../Components/ControlBar/ControlBar';
import Report from '../Components/Report/Report';
import MoreInfo from '../Components/MoreInfo/MoreInfo';
import Recommendation from '../Components/Recommendation/Recommendation';

function Weather(props) {
    console.log('the weather is ', props.weatherReport)
    return(
        <main>
            <ControlBar/>
            <Report weatherReport={props.weatherReport}/>
            <MoreInfo/>
            <Recommendation/>
        </main>
    );
};

export default Weather;