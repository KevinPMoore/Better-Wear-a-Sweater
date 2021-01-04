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
            <LandingForm setWeatherReport={props.setWeatherReport} confirmWeatherReport={confirmWeatherReport}/>
        </main>
    );
};

export default Landing;