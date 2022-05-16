import React from "react";
import { Fab } from "@material-ui/core";
import "../Sections.css";
import "./BottomInfo.css";

function BottomInfo(props) {
  return (
    <div className={"section"}>
      <div className={"bottom-container"}>
        <div id="make-impact">Make Impact</div>
          {/* <Fab variant={"extended"} className={"home-button"}>
            Apply Now!
          </Fab> */}
          <Fab variant={"extended"} className={"home-button"}>
            <div 
              className="apply-button" 
              data-hackathon-slug="hackgdsc" 
              data-button-theme="light"
              style={{height: "44px", width: "312px"}}
            ></div>
          </Fab>
        <div id="shadow"></div>
      </div>
    </div>
  );
}

export default BottomInfo;
