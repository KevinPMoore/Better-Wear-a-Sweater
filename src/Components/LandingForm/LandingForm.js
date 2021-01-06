import Utils from '../../Utils';
import './LandingForm.css';

function LandingForm(props) {
    

    function handleLocation(ev) {
        props.setLocation(ev.target.value);
    };

    function handleLocationSubmit(ev) {
        ev.preventDefault();
        Utils.getWeatherForLocation(props.location, props.weatherUnits)
        .then(res => {
            props.setWeatherReport(res);
        })
        .then(() => {
            props.confirmWeatherReport();
        });
    };

    return(
        <form
            className='LandingLocationForm'
            onSubmit={handleLocationSubmit}
        >
            <label>
                Location:
                <input
                    type='text'
                    placeholder='Atlanta'
                    onChange={handleLocation}
                    required
                >
                </input>
            </label>
            <button
                type='submit'
            >
                Submit
            </button>
        </form>
    );
};

export default LandingForm;