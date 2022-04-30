import React from 'react';
import { Fab } from "@material-ui/core";
import '../Sections.css';
import './BottomInfo.css';

function BottomInfo(props) {
    return (
        <div className={'section'}>
            <div className={'bottom-container'}>
                <div id="make-impact">Make Impact</div>
                <a style={{textDecoration: "none" }}href="https://hackduke.typeform.com/to/Dilr78Te" target="_blank" rel="noopener noreferrer">
                    <Fab variant={"extended"} className={"home-button"}>Apply Now!</Fab>
                </a>
                <div id="legal">© HackDuke 2020 — <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</a></div>
                <div id="shadow"></div>
            </div>
        </div>
    )
}

export default BottomInfo;
