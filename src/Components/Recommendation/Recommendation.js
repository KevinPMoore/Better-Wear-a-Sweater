
import './Recommendation.css';

function Recommendation(props) {
    //factors to consider
    //current temp vs temp range
    //percipitation current vs day
    //handy infographic
    //https://d10k7k7mywg42z.cloudfront.net/assets/5cf6aac6438fc359911a88e5/How_to_Dress_for_the_Weather_STANDARD.pdf

    //morning = sunrise to noon (ends at 11 inclusive)
    //day = noon to 5pm (12 to 16 inclusive)
    //evening = 5pm to sunset (starts at 17 inclusive)
    //night = sunset to sunrise of next day

    console.log('Recommendation report is ', props.weatherReport)

    function setRecommendation() {
        //Start with current temp
        const currentTemp = props.weatherReport.current.temp;
        console.log('currentTemp is ', currentTemp);

        //Get temps for morning, midday, evening and night
        const morningTemp = props.weatherReport.daily[0].temp.morn;
        console.log('morningTemp is ', morningTemp);
        const dayTemp = props.weatherReport.daily[0].temp.day;
        console.log('dayTemp is ', dayTemp);
        const eveningTemp = props.weatherReport.daily[0].temp.eve;
        console.log('eveningTemp is ', eveningTemp);
        const nightTemp = props.weatherReport.daily[0].temp.night;
        console.log('nightTemp is ', nightTemp);

        //Determine which parts of the day you are in and which have already passed
        const currentTime = props.weatherReport.current.dt;
        const currentTimeHours = new Date(currentTime*1000).getHours();
        
        const sunrise = props.weatherReport.current.sunrise;
        const sunset = props.weatherReport.current.sunset;
        if(currentTime < sunrise || currentTime > sunset) {
            console.log('it is night')
        } else if (currentTime > sunrise && currentTimeHours <= 11) {
            console.log('it is morning')
        } else if (currentTimeHours >= 12 && currentTimeHours <= 16) {
            console.log('it is day')
        } else {
            console.log('it is evening')
        };
    };

    function renderRecommendation() {

    };

    return(
        <div
            className='Recommendation'
        >
            {setRecommendation()}
        </div>
    );
};

export default Recommendation;