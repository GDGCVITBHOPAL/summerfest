import React from 'react';
import SwiperCore, { A11y, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SpeakerSlider.css';
import devfolio from "../graphics/devfolio.png"
import filecoin from "../graphics/filecoin.png"
import polygon from "../graphics/polygon.png"
import tezos from "../graphics/tezos.png"
import celo from "../graphics/celo.png"
import interviewcake from "../graphics/interviewcake.png"
import icons8 from "../graphics/Icons8.png"
import clerky from "../graphics/clerky.jpg"
import arcana from "../graphics/Arcana1.png"
import atCompany from "../graphics/AtCompany.png"
import wize from "../graphics/wize.png"
import huddle01 from "../graphics/Huddle01.png"
import moreficient from "../graphics/moreficient.png"

// Import Swiper styles
import 'swiper/swiper.scss';
import './SpeakerSlider.css';


// install Swiper components
SwiperCore.use([A11y, Autoplay]);

function SpeakerSlider() {

    return (
        <>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}
            //onSlideChange={changeCSS}

            >
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://devfolio.co' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                    <img className={"speaker-image-1"} src={devfolio} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://polygon.technology/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-1"} src={polygon} alt="" style={{"cursor":"pointer"}} />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                            </div>
                        </a>
                    </div>
                </SwiperSlide>

            </Swiper>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}                //onSlideChange={changeCSS}
            >

                <SwiperSlide style={{marginRight:"-80px"}}>
                    <div className={"speaker-container-2"}>
                        <a href='https://tezos.com' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={tezos} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://celo.org' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={celo} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://filecoin.io' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={filecoin} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://arcana.network/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img id="extra-large" className={"speaker-image-2"} src={arcana} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}
            >
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://huddle01.com/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={huddle01} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={moreficient} alt="" style={{"cursor":"pointer", width:"160px", height:"160px"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://www.clerky.com/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={clerky} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://icons8.com/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={icons8} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}
            >
                <SwiperSlide>
                    <div className={"speaker-container-3"}>
                        <a href='https://www.interviewcake.com/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={interviewcake} alt="" style={{"cursor":"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-3"}>
                        <a href='https://atsign.com/' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2 extra-large"}  src={atCompany} alt="" style={{padding:"10px 5px", background:'white', cursor:'pointer'}} />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-3"}>
                        <a href='https://wize.ws' target="_blank" rel="noopener noreferrer" style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2 extra-large"}  src={wize} alt="" style={{ width:"70%", cursor:"pointer"}}/>
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SpeakerSlider;
