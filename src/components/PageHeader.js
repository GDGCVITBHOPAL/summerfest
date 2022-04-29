import React from "react";
import "./PageHeader.css";
import { GrInstagram } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function PageHeader(props) {
  return (
    <div className={"header-section"}>
      <span className={"header-title"}>HackGDSC 2022</span>
      <span className={"icon-section"}>
        <a href="https://www.instagram.com/gdscvitbhopal">
          <GrInstagram className={"social-icon"} />
        </a>
        <a href="https://twitter.com/gdscvitbhopal">
          <FaTwitter className={"social-icon"} />
        </a>
        <a href="https://discord.com/invite/3ufQSct">
          <FaDiscord className={"social-icon"} />
        </a>
      </span>
    </div>
  );
}

export default PageHeader;
