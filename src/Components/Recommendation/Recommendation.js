
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

        //Determine which stage of day you are in
        const currentTime = props.weatherReport.current.dt;
        const currentTimeHours = new Date(currentTime*1000).getHours();
        
        const sunrise = props.weatherReport.current.sunrise;
        const sunset = props.weatherReport.current.sunset;

        let stageOfDay;

        if(currentTime < sunrise || currentTime > sunset) {
            stageOfDay = 'night';
        } else if (currentTime > sunrise && currentTimeHours <= 11) {
            stageOfDay = 'morning';
        } else if (currentTimeHours >= 12 && currentTimeHours <= 16) {
            stageOfDay = 'day';
        } else {
            stageOfDay = 'evening';
        };

        //Set up a switch to compare current stage of day to remaining stages
        switch(stageOfDay) {
            case 'morning':
                console.log('day, evening and night are still ahead');
                break;
            case 'day':
                console.log('evening and night are still ahead');
                break;
            case 'evening':
                console.log('night is still ahead');
                break;
            case 'night':
                console.log('night is all we need bby');
                break;
            default:
                console.log('Does this app even work if used at like 2am?');
        }
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