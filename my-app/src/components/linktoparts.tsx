import React from "react";
import "../App.css";

const Linktopart=({src,title})=>{
    return(
        <div className="part" onClick={() => document.getElementById("target-section")?.scrollIntoView({ behavior: "smooth" })}>
            <svg width="180" height="180" className="cir">
                <circle cx="90" cy="90" r="80" style={{ fill: "#7FDBFF" }} />
            </svg>

            <svg width="140" height="140" className="cir">
                <circle cx="70" cy="70" r="60" style={{ fill: "#0074D9" }} />
            </svg>

            <svg width="100" height="100" className="cir">
                <circle cx="50" cy="50" r="40" style={{ fill: "rgb(0, 60, 119)" }} />
            </svg>

            <svg width="180" height="180" className="cir">
                <circle cx="90" cy="90" r="80" style={{ fill: "#7FDBFF" }} />
            </svg>

            <svg width="140" height="140" className="cir">
                <circle cx="70" cy="70" r="60" style={{ fill: "#0074D9" }} />
            </svg>

            <svg width="100" height="100" className="cir">
                <circle cx="50" cy="50" r="40" style={{ fill: "rgb(0, 60, 119)" }} />
            </svg>

            <img src={src} className="partimg"></img>
            
            <strong id="linkstoparttitle">{title}</strong>
        </div>


    )
}

export default Linktopart;