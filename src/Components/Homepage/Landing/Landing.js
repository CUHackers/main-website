import React, { useState } from "react";
import device from "./bowls.png";
import Textcluster from "./Textcluster.js";
import Sprite2 from "./Sprite2.js";
import Sprite3 from "./Sprite3.js";
import "./Landing.scss";
import bg2 from "./web_no_console.png";

const Landing = (props) => {
    const [loading, setLoading] = React.useState(false);
    const [sprite, setSprite] = React.useState(true);

    function titleoption() {
        const thirdDivStyle = {
            backgroundColor: "#EEC25E",
            borderRadius: "15px",
        };
        return (
            <div id="title">
                <div>CUhackit 2023</div>
                <div id="eventdate">February 4th and 5th</div>
                <div id="eventdate">Clemson, SC</div>
                <div id="subtitle">
                    <div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAAfNHaaM1jO_0jSUctC95fdfccfYmc_zBT69dg9-ej5F6WQ/viewform?usp=sf_link">
                            Become a hacker!
                        </a>
                    </div>
                    <div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCMX-nIxQv2ZdraGX5qfRD2K6E7fYIJc2ZOi7VkW3hXB-kLw/viewform?usp=sf_link">
                            Become a mentor!
                        </a>
                    </div>
                    <div style={thirdDivStyle}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfluFId8UPOT4wJZ4o_0ZQXk0l66hskL5x4I79GOLIZ5xMG7w/viewform?usp=sf_link">
                            Lead a workshop!
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header style={{ backgroundColor: "#aed1cf" }}>
                {sprite ? titleoption() : ""}
                <div
                    style={{
                        backgroundImage: `url(${device})`,
                    }}
                    id="console"
                >
                    <div id="landinggroup">
                        {loading ? <></> : sprite ? <></> : <Textcluster />}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Landing;
