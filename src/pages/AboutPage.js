import React from 'react';
import './AboutPage.css';

import tripleBall from '../graphics/triple-ball.svg';
import blueBall from '../graphics/blue-ball.svg';

function AboutPage(props) {

    return (
        <div className={'about-page'}>
            <div className={'about-cols'}>
                {/* LEFT COLUMN */}
                <div className={'about-flex'}>
                    {/* top left text */}
                    <div className={'about-section-container left-container'}>
                        <div className={'about-section'}>
                            <h3>The nation's premier hackathon for tech and social good.</h3>
                            <p>Our mission is to unite passionate students to create meaningful solutions that transform the intention and narrative behind technology. In this 24 hour sprint, you will collaborate with other students, university initiatives, and community organizations.</p>
                        </div>
                    </div>

                    {/* bottom left image */}
                    <div className={'about-section-container left-container'}>
                        <div className={'about-img-container'}>
                            <img className={'about-img'} src={blueBall} alt=''></img>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className={'about-flex'}>
                    <div className={'about-section-container right-container'}>
                        <div className={'about-img-container'}>
                            <img className={'about-img'} src={tripleBall} alt=''></img>
                        </div>
                    </div>
                    
                    <div className={'about-section-container right-container'}>
                        <div className={'about-section'}>
                            <h3>But, it’s not just about building meaningful projects.</h3>
                            <p>It's also an open forum to discuss, share and bring to life ideas that aim to make a positive impact on social issues. Look forward to working with experts from non-profits and coding alongside mentors from our tech sponsors!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutPage;
