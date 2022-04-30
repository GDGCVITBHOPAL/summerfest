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
                    <h1 className={"home-title"}>Code for Good</h1>
                    <div className={"home-circle"}></div>
                    <h3 className={"home-dates"}>December 5 - 6, 2020</h3>
                </div>
                <a style={{textDecoration: "none" }}href="https://tinyurl.com/hd-hacker-guide" target="_blank" rel="noopener noreferrer">
                    <Fab variant={"extended"} className={"home-button"}>Hacker Guide Here!</Fab>
                </a>
            </div>
        </div>
    )
}

export default HomePage;