import LandingContent from '../Components/LandingContent/LandingContent';
import LandingForm from '../Components/LandingForm/LandingForm';

function Landing(props) {
    function confirmWeatherReport() {
        if(props.weatherReport !== undefined) {
            props.setHasWeather(true);
        };
    };

    return(
        <main>
            <LandingContent/>
            <LandingForm location={props.location} setLocation={props.setLocation} setWeatherReport={props.setWeatherReport} weatherUnits={props.weatherUnits} confirmWeatherReport={confirmWeatherReport}/>
        </main>
    );
};

export default Landing;