import React from "react";
import "./PageHeader.css";
import { GrInstagram } from "react-icons/gr";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import logoSrc from "./navbar-logo.png";
function PageHeader(props) {
  return (
    <div className={"header-section"}>
      <span className={"header-title"}>
        {/* SUMMERFEST 2022 */}
        <img alt="" src={logoSrc} width="130px" />
      </span>
      <span className={"icon-section"}>
        <a href="https://www.instagram.com/gdscvitbhopal">
          <GrInstagram className={"social-icon"} />
        </a>
        <a href="https://twitter.com/gdscvitbhopal">
          <FaTwitter className={"social-icon"} />
        </a>
        <a href="https://www.linkedin.com/company/gdscvitbhopal/">
          <FaLinkedin className={"social-icon"} />
        </a>
        <a href="https://discord.com/invite/3ufQSct">
          <FaDiscord className={"social-icon"} />
        </a>
      </span>
    </div>
  );
}

export default PageHeader;
