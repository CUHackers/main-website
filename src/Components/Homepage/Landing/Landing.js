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
            backgroundColor: "#fee28a",
            borderRadius: "15px",
        };
        return (
            <div id="title">
                <div>CUhackit 2024</div>
                <div id="eventdate">March 2nd & 3rd</div>
                <div id="eventdate">Clemson, SC</div>
                <div id="subtitle">
                    <div className="subtitle-hacker">
                        <a href="https://forms.gle/CJ5PYrDxKkSGpcBt6">
                            Become a hacker!
                        </a>
                    </div>
                    <div className="subtitle-mentor">
                        <a href="https://forms.gle/Gws3pJqn4rtWivrJ9">
                            Become a mentor!
                        </a>
                    </div>
                    <div className="subtitle-workshop" style={thirdDivStyle}>
                        <a href="https://forms.gle/xw6due2o9xZ1s7ur7">
                            Lead a workshop!
                        </a>
                    </div>
                    <div className="subtitle-partner" style={thirdDivStyle}>
                        <a href="/#/partners">
                            Become a partner!
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
