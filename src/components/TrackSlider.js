import React from "react";
import machine from "../graphics/machine.svg";
import Web from "../graphics/web.svg";
/* import tracks1 from '../graphics/tracks2.svg';
// import tracks2 from '../graphics/tracks2.svg'; */
// import tracks3 from "../graphics/tracks3.svg";
import web3 from "../graphics/web3.svg";
import game from "../graphics/game.svg";
import open from "../graphics/open.svg";
import app from "../graphics/app.svg";
/* import tracks4 from '../graphics/tracks4.svg'; */
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TrackSlider.css";
/* import content from "./Tracks.json" */
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Pagination, A11y, Autoplay]);

function TrackSlider() {
  return (
    <Swiper
      updateOnWindowResize
      autoplay={{ delay: 5000 }}
      speed={1000}
      slidesPerView={1.3}
      centeredSlides
      spaceBetween={100}
      breakpoints={{ 768: { slidesPerView: 1.5 } }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className} override slide${index}"></div>`;
        },
      }}
    >
      <SwiperSlide>
        <div className={"track-container"}>
          <div className={"track-imagebox"}>
            <img className={"track-image track1-image"} src={machine} alt="" />
          </div>
          <div className={"track-textbox"}>
            <h1 className={"track-title"}>Machine Learning</h1>
            <p className={"track-contents"}>
              The Machine Learning track expands over a diverse range of
              applications for day-to-day problems. Combined with Artificial
              Intelligence, it can create a dynamic solution to address
              environmental problems by detecting energy emission reductions,
              removing CO2, developing greener transportation networks,
              monitoring deforestation, and predicting extreme weather
              conditions.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"track-container"}>
          <div className={"track-imagebox"}>
            <img className={"track-image track2-image"} src={Web} alt="" />
          </div>
          <div className={"track-textbox"}>
            <h1 className={"track-title"}>Web</h1>
            <p className={"track-contents"}>
              The Web Development track revolves around building and Rendering
              Web pages, including HTML, CSS, SVG, device APIs, and other
              technologies for Web Applications. It opens up the endless
              possibilities of interconnected tools to create the most efficient
              and accessible platform for deploying sustainable solutions.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"track-container"}>
          <div className={"track-imagebox"}>
            <img className={"track-image track3-image"} src={open} alt="" />
          </div>
          <div className={"track-textbox"}>
            <h1 className={"track-title"}>Open Innovation</h1>
            <p className={"track-contents"}>
              The Open Innovation Track unlocks a mindset contrary to the
              secrecy and silo mentality of the traditional community. The key
              to sustainable open innovation is integrating consumers’ ideas
              into the process of building solutions such as Clean Energy
              Efficiency, Repurposing waste, etc.
            </p>
          </div>
          {/* comment here */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"track-container"}>
          <div className={"track-imagebox"}>
            <img className={"track-image track4-image"} src={app} alt="" />
          </div>
          <div className={"track-textbox"}>
            <h1 className={"track-title"}>Mobile Development</h1>
            <p className={"track-contents"}>
              The Mobile Development Track leverages light-weight yet powerful
              applications by the virtue of an attractive User Interface with a
              good User Experience. The track is designed to help you build
              interactive systems capable of solving complex problems.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"track-container"}>
          <div className={"track-imagebox"}>
            <img className={"track-image track2-image"} src={web3} alt="" />
          </div>
          <div className={"track-textbox"}>
            <h1 className={"track-title"}>Web 3</h1>
            <p className={"track-contents"}>
              The Web3 track offers an idea for a new iteration of the World
              Wide Web-based on blockchain technology. This iteration relies on
              such concepts as decentralization and token-based economics.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"track-container"}>
          <div className={"track-imagebox"}>
            <img className={"track-image track1-image"} src={game} alt="" />
          </div>
          <div className={"track-textbox"}>
            <h1 className={"track-title"}>Game Development</h1>
            <p className={"track-contents"}>
              The Game Development track unfurls the art of creating games and
              describes the design, development, and releasing the game. It
              involves concept generation, design, build, test, and release.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TrackSlider;
