import React from 'react';
import TrackSlider from "../../components/TrackSlider";


function Tracks(props) {

    return (
        <div className={'section'}>
            <div className={'section-page-container'}>
                <div className={'section-content-container'}>
                    <div className={'section-header'}>Tracks</div>
                </div>
            </div>
            <div className={"tracks"}>
                <TrackSlider/>
            </div>
        </div>
    )
}

export default Tracks;
