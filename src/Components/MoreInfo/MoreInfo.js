import React, { useState } from 'react';

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
                        Here is some placeholder text
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