import React from 'react';
import tracks1 from '../graphics/tracks1.svg';
import tracks2 from '../graphics/tracks2.svg';
import tracks3 from '../graphics/tracks3.svg';
import tracks4 from '../graphics/tracks4.svg';
import SwiperCore, { Pagination, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TrackSlider.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Pagination, A11y, Autoplay]);

function TrackSlider() {

    return (
        <Swiper
            updateOnWindowResize
            autoplay={{delay: 5000}}
            speed={1000}
            slidesPerView={1.3}
            centeredSlides
            spaceBetween={100}
            breakpoints={{768: {slidesPerView: 1.5}}}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    return `<div class="${className} override slide${index}"></div>`
                }
            }}
        >
            <SwiperSlide>
                <div className={"track-container"}>
                    <div className={"track-imagebox"}>
                        <img className={"track-image track1-image"} src={tracks1} alt="" />
                    </div>
                    <div className={"track-textbox"}>
                        <h1 className={"track-title"}>Inequality</h1>
                        <p className={"track-contents"}>The Inequality track targets problems regarding both social and economic inequality. Whether it is creating solutions to bridge the income gap, or finding ways to reduce disparities in gender or race, this track is built on the principle that everyone should have the capacity to reach their full potential.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"track-container"}>
                    <div className={"track-imagebox"}>
                        <img className={"track-image track2-image"} src={tracks2} alt="" />
                    </div>
                    <div className={"track-textbox"}>
                        <h1 className={"track-title"}>Energy and Environment</h1>
                        <p className={"track-contents"}>The Energy and Environment track encompasses a technical perspective to deal with large issues impacting energy use, allocation and environmental regulations. This track has many applications, including machine learning for resource extraction, the use of green energy and enforcing environmental policy.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"track-container"}>
                    <div className={"track-imagebox"}>
                        <img className={"track-image track3-image"} src={tracks3} alt="" />
                    </div>
                    <div className={"track-textbox"}>
                        <h1 className={"track-title"}>Health</h1>
                        <p className={"track-contents"}>The Health track allows hackers to work with various kinds of health related data, as well as connect with mentors from the intersection of health and technology. More than ever, technology today is in a prime position to improve the quality, efficiency, and accessibility of health care.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"track-container"}>
                    <div className={"track-imagebox"}>
                        <img className={"track-image track4-image"} src={tracks4} alt="" />
                    </div>
                    <div className={"track-textbox"}>
                        <h1 className={"track-title"}>Education</h1>
                        <p className={"track-contents"}>The Education track pairs hackers with educators, reaching out to all levels of subjects and skills. In addition to HackDuke sponsored Education events, projects aim to increase visibility of technology and to introduce basic skills to the public.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default TrackSlider;
