import React from 'react';
import '../Sections.css';
import './Sponsors.css';
import sponsors from './sponsors.png';
import balls from './yellow-balls.png';
import balls2 from './yellow2.png';

function Sponsors(props) {

    return (
        <div className={'section'}>

            <div className={'section-page-container'}>
                <div className={'section-content-container'}>
                    <div className="flex-container">

                        <div className={"flex-left"}>
                            <img className={'ball-img'} src={balls} alt=''></img>
                            <div className={'sponsors-header'}>Sponsors</div>
                            <div className = {'space'}></div>
                            <div className={'sponsors-subheader'}>A huge thank you to all of our sponsors!</div>
                            <img className={'ball2-img'} src={balls2} alt=''></img>
                        </div>

                        <div className={'flex-right'}>
                            <img className={'sponsors-img'} src={sponsors} alt=''></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;