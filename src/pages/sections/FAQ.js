import React from 'react';
import '../Sections.css';
import './FAQ.css';

function FAQ(props) {

    return (
        <div className={'section'}>

            <div className={'section-page-container'}>
                <div className={'section-content-container'}>
                    <div className={'section-header'}>FAQ</div>
                    
                    {/* QUESTIONS */}
                    <div className={'questions-container'}>
                        <div className={'questions-row'}>
                            <div className='question'>
                                <div>Who can participate?</div>
                                <div>You can participate as long as you're a student (undergraduate or graduate)! If you're a new grad, we'd love to have you too.</div>
                            </div>
                            <div className='question'>
                                <div>When? Where?</div>
                                <div>HackDuke starts Saturday, December 5th and ends on Sunday, December 6th. All of our events will be done virtually this year using Hopin and Discord.</div>
                            </div>
                            <div className='question'>
                                <div>Travel?</div>
                                <div>The only travel needed will be from Hopin to Discord and back. We are virtual :)</div>
                            </div>
                            <div className='question'>
                                <div>Will there be prizes?</div>
                                <div>Yes, but there's a little twist! The grand prizes are donations under your name to charities and causes! There will be grand prize winners for each track, novice track and many other company sponsored API prizes as well. Stay tuned for more details day of!</div>
                            </div>
                        </div>
                        <div className={'questions-row'}>
                            <div className='question'>
                                <div>What can I make?</div>
                                <div>Because we are virtual, we expect most submissions will be software hacks that align with our tracks for impact. However, if you want to make a hardware hack, please note that we cannot supply any supplies/tools.</div>
                            </div>
                            <div className='question'>
                                <div>Who can I work with?</div>
                                <div>Anyone! Get to know your fellow programmers better from your own and other schools! The only request that we have is that you make a new friend by talking to each other, our mentors and our experts!</div>
                            </div>
                            <div className='question'>
                                <div>I want to volunteer or mentor! How can I help?</div>
                                <div>To help with logistics day of, sign up to volunteer. If you're looking to mentor hackers with tech or track knowledge, drop us an email at hackers@hackduke.org!</div>
                            </div>
                            <div className='question'>
                                <div>How can I become a sponsor?</div>
                                <div>Email us at sponsorship@hackduke.org.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
