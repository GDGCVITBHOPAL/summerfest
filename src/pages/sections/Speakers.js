import React from "react";
import SpeakerSlider from "../../components/SpeakerSlider";

function Speakers(props) {
  return (
    <div className={"section"}>
      <div className={"section-page-container"}>
        <div className={"section-content-container"}>
          <div className={"section-header"}>Sponsors</div>
          {/* <p className={"speaker-intro"}>Coming soon</p> */}
          <p style={{ fontSize: "1.3rem" }}>A huge thank you to all of our sponsors!</p>
          <div className={"speakers"}>
            <SpeakerSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
