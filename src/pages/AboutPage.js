import React from "react";
import "./AboutPage.css";

import tripleBall from "../graphics/triple-ball.svg";
import blueBall from "../graphics/blue-ball.svg";

function AboutPage(props) {
  return (
    <div className={"about-page"}>
      <div className={"about-cols"}>
        {/* LEFT COLUMN */}
        <div className={"about-flex"}>
          {/* top left text */}
          <div className={"about-section-container left-container"}>
            <div className={"about-section"}>
              <h3>
                GDSC VIT Bhopal brings to you the institute's premier hackathon
              </h3>
              <p>
                Our aim is to provide a platform to the young, passionate coders
                who are committed to provide a solution that can explain the
                intention and narrative behind technology.
              </p>
            </div>
          </div>

          {/* bottom left image */}
          <div className={"about-section-container left-container"}>
            <div className={"about-img-container"}>
              <img className={"about-img"} src={blueBall} alt=""></img>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={"about-flex"}>
          <div className={"about-section-container right-container"}>
            <div className={"about-img-container"}>
              <img className={"about-img"} src={tripleBall} alt=""></img>
            </div>
          </div>

          <div className={"about-section-container right-container"}>
            <div className={"about-section"}>
              <h3>Not just about building a meaningful projects.</h3>
              <p>
                It is a platform to exchange ideas that focus on implementing
                positive impact on current social issues. Look forward to
                collaborating with non-profits and coding alongside mentors from
                our tech sponsors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
