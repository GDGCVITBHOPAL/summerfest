import React from "react";
import { Fab } from "@material-ui/core";
import "./HomePage.css";
import PageHeader from "../components/PageHeader";
import Timer from "../components/Timer";

function HomePage(props) {
  return (
    <div>
      <PageHeader />
      <div className={"home-page"}>
        <div>
          <h1 className={"home-title"}>HackGDSC</h1>
          <div className={"home-circle"}></div>
          <h3 className={"home-dates"}>May 5 - May 6, 2022</h3>
        </div>
        {/* <a style={{textDecoration: "none" }}href="https://tinyurl.com/hd-hacker-guide" target="_blank" rel="noopener noreferrer"> */}
        {/* Make clicking this scroll to register section */}
        <Fab variant={"extended"} className={"home-button"}>
          Register Now!
        </Fab>
        {/* </a> */}
        <Timer targetTime="2022-05-02T00:00:00+05:30" />
      </div>
    </div>
  );
}

export default HomePage;
