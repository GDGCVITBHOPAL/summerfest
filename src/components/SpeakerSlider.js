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


// Import Swiper styles
import 'swiper/swiper.scss';
import './SpeakerSlider.css';


// install Swiper components
SwiperCore.use([A11y, Autoplay]);

function SpeakerSlider() {

    // //for changing CSS of active slides in slider
    // const [first, changeFirst] = useState(1);
    // const [last, changeLast] = useState(1);
    //
    // const changeCSS = e => {
    //     changeFirst(e.realIndex);
    //     changeLast((e.activeIndex-1)%16);
    // }
    //
    // const checkBetween = index => {
    //     if (index > first && index < last) return true;
    //     if (first > last) {
    //         if (index > first) return true;
    //         if (index < first && index < last) return true;
    //     }
    //     return false;
    // }

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
                        <div className={"speaker-imagebox-main"}>
                            <a href='https://devfolio.co'>
                                <img className={"speaker-image-1"} src={devfolio} alt="" />
                            </a>
                        </div>
                        <div className={"speaker-textbox"}>
                            {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <div className={"speaker-imagebox-main"}>
                            <a href='https://polygon.technology/'>
                                <img className={"speaker-image-1"} src={polygon} alt="" />
                            </a>
                        </div>
                        <div className={"speaker-textbox"}>
                            {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                        </div>
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
            //onSlideChange={changeCSS}

            >

                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <div className={"speaker-imagebox-main"}>
                            <a href='https://tezos.com'>
                                <img className={"speaker-image-2"} src={tezos} alt="" />
                            </a>
                        </div>
                        <div className={"speaker-textbox"}>
                            {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <div className={"speaker-imagebox-main"}>
                            <a href='https://celo.org'>
                                <img className={"speaker-image-2"} src={celo} alt="" />
                            </a>
                        </div>
                        <div className={"speaker-textbox"}>
                            {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <div className={"speaker-imagebox-main"}>
                            <a href='https://filecoin.io'>
                                <img className={"speaker-image-2"} src={filecoin} alt="" />
                            </a>
                        </div>
                        <div className={"speaker-textbox"}>
                            {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default SpeakerSlider;
