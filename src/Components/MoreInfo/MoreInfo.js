import React, { useState } from 'react';

//Fix renderInfoContent to show Sunrise and Sunset times

function MoreInfo(props) {
    const [ showInfo, setShowInfo ] = useState(false);

    function toggleShowInfo() {
        return setShowInfo(!showInfo);
    };

    function renderInfoContent() {
        if(showInfo === false) {
            return(
                <button
                    className='InfoButton'
                    onClick={toggleShowInfo}
                >
                    More Info
                </button>
            );
        } else {
            return(
                <div
                    className='ExpandedInfo'
                >
                    <button
                        className='InfoButton'
                        onClick={toggleShowInfo}
                    >
                        Less Info
                    </button>
                    <p>
                    High: {Math.round(props.weatherReport.daily[0].temp.max)} <br/>
                    Low:  {Math.round(props.weatherReport.daily[0].temp.min)} <br/>
                    Morning: {Math.round(props.weatherReport.daily[0].temp.morn)} <br/>
                    Midday: {Math.round(props.weatherReport.daily[0].temp.day)} <br/>
                    Evening: {Math.round(props.weatherReport.daily[0].temp.eve)} <br/>
                    Night: {Math.round(props.weatherReport.daily[0].temp.night)} <br/>
                    Sunrise:
                    Sunset:
                    </p>
                </div>
            );
        };
    };

    return(
        <div
            className='MoreInfo'
        >
            {renderInfoContent()}
        </div>
    );
};

export default MoreInfo;