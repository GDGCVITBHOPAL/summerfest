import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import SwiperCore, { A11y, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import speaker1 from "../graphics/speaker-1.svg";
import tom from "../graphics/tom.svg";
import "./SpeakerSlider.css";
SwiperCore.use([A11y, Autoplay]);
const Contact = () => {
  return (
    <div>
      <Swiper
        updateOnWindowResize
        autoplay={{ delay: 3000 }}
        speed={1000}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1260: { slidesPerView: 5 },
          1600: { slidesPerView: 6 },
        }}
        //onSlideChange={changeCSS}
      >
        <SwiperSlide>
          <div className={"speaker-container"}>
            <div className={"speaker-imagebox"}>
              <img
                className={"speaker-image"}
                src={
                  "https://raw.githubusercontent.com/DSCVITBHOPAL/dscvitbhopal.github.io/master/public/images/members/2021/1.jpeg"
                }
                alt=""
              />
            </div>
            <div className={"speaker-textbox"}>
              <h1 className={"speaker-name"}>Ishika Kulkarni</h1>
              <p className={"speaker-title"}>Community Lead, GDSC VITB</p>
              <a
                className={"social-icons-contact"}
                href="https://www.instagram.com/kulkarni.ishika/"
                style={{ marginRight: "20px" }}
              >
                <FiInstagram />
              </a>
              <a
                className={"social-icons-contact"}
                href=" https://www.linkedin.com/in/ishikakulkarni/"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"speaker-container"}>
            <div className={"speaker-imagebox"}>
              <img
                className={"speaker-image"}
                src={
                  "https://raw.githubusercontent.com/DSCVITBHOPAL/dscvitbhopal.github.io/master/public/images/members/2021/2.jpg"
                }
                alt=""
              />
            </div>
            <div className={"speaker-textbox"}>
              <h1 className={"speaker-name"}>Aman Sharma</h1>
              <p className={"speaker-title"}>
                Technical Lead , GDSC
                <br /> VITB
              </p>
              <a
                className={"social-icons-contact"}
                href="https://www.instagram.com/iss_yo_aman/"
                style={{ marginRight: "20px" }}
              >
                <FiInstagram />
              </a>
              <a
                className={"social-icons-contact"}
                href="https://www.linkedin.com/in/amansharma2910/"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Contact;
