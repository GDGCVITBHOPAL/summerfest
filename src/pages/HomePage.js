import React from "react";
import { Fab } from "@material-ui/core";
import "./HomePage.css";
import PageHeader from "../components/PageHeader";

function HomePage(props) {

    return (
        <div>
            <PageHeader/>
            <div className={"home-page"}>
                <div>
                    <h1 className={"home-title"}>Hack DSC</h1>
                    <div className={"home-circle"}></div>
                    <h3 className={"home-dates"}>May 5 - 6, 2022</h3>
                </div>
                {/* <a style={{textDecoration: "none" }}href="https://tinyurl.com/hd-hacker-guide" target="_blank" rel="noopener noreferrer"> */}
                {/* Make clicking this scroll to register section */}
                    <Fab variant={"extended"} className={"home-button"}>Register Now!</Fab>
                {/* </a> */}
            </div>
        </div>
    )
}

export default HomePage;