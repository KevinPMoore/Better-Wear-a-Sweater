import './Header.css';

function Header(props) {

    function clearWeatherReport() {
        props.setHasWeather(false);
        props.setWeatherReport({});
    };

    function renderHeader() {
        if(props.hasWeather !== true) {
            return(
                <header>
                    <h1>
                        Better wear a Sweater
                    </h1>
                    <h2>
                        TAGLINE HERE
                    </h2>
                </header>
            );
        } else {
            return(
                <header>
                <h1>
                    Better wear a Sweater
                </h1>
                <h2>
                    TAGLINE HERE
                </h2>
                <button
                    className='HeaderButton'
                    onClick={clearWeatherReport}
                >
                    Clear Report
                </button>
            </header>
            );
        };
    };

    return(
        renderHeader()
    );
};

export default Header;