import React from "react";
import "./PageHeader.css"
import { CgFacebook } from 'react-icons/cg';
import { GrInstagram } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'

function PageHeader(props) {

    return (
        <div className={"header-section"}>
            <span className={"header-title"}>HackDuke</span>
            <span className={"icon-section"}>
                <a href="https://www.facebook.com/hackduke/"><CgFacebook className={"social-icon"}/></a>
                <a href="https://www.instagram.com/hackduke/"><GrInstagram className={"social-icon"}/></a>
                <a href="https://twitter.com/hackduke/"><FaTwitter className={"social-icon"}/></a>
            </span>
        </div>
    )
}

export default PageHeader;
