import React from "react";
import SpeakerSlider from "../../components/SpeakerSlider";

function Speakers(props) {
  return (
    <div className={"section"}>
      <div className={"section-page-container"}>
        <div className={"section-content-container"} style={{marginTop:"20vh", marginBottom:"10vh", width:"80vw"}}>
          <div className={"section-header-sponsor"}>Sponsors</div>
          {/* <p className={"speaker-intro"}>Coming soon</p> */}
          <p style={{ fontSize: "1.3rem" }}></p>
          <div className={"speakers"} style={{marginTop: "30px"}}>
            <SpeakerSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
