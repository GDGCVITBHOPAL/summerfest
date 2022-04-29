import React from 'react';
import './Sections.css';

import Tracks from './sections/Tracks';
// import Schedule from './sections/Schedule';
import FAQ from './sections/FAQ';
// import Sponsors from './sections/Sponsors';
import BottomInfo from './sections/BottomInfo';

import yellowBottom from '../graphics/yellow-bottom.svg';
import colorfuls from '../graphics/colorfuls.svg';
import spookys from '../graphics/transition.svg';
import Speakers from "./sections/Speakers";
import ContactPage from './sections/Contact';

function Sections(props) {
    return (
        <div className={'all-sections'}>

            <div className={'dark-sections'}>
                <img src={yellowBottom} alt=''></img>

                <Tracks/>
                <Speakers/>
                {/* <Schedule/> */}
                <ContactPage/>
                <FAQ/>
            </div>

            <div className='colorfuls' style={{ backgroundImage: `url(${colorfuls})` }}></div>
            <div className='spookys' style={{ backgroundImage: `url(${spookys})` }}></div>

            <div className={'light-sections'}>
{/*             <Sponsors/> */}
                <BottomInfo/>
            </div>
        </div>
    )
}

export default Sections;
