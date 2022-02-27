import React from 'react';
import SpeakerSlider from "../../components/SpeakerSlider";


function Speakers(props) {

    return (
        <div className={'section'}>
            <div className={'section-page-container'}>
                <div className={'section-content-container'}>
                    <div className={'section-header'}>Speakers</div>
                    <p className={'speaker-intro'}>HackDuke brings in industry leaders, startup founders, and other impressive humans for talks and workshops. Learn, grow, and get inspired.</p>
                    <div className={"speakers"}><SpeakerSlider/></div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;
