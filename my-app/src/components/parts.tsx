import React from "react";
import "../App.css";
import Linktopart from "./linktoparts";
import photo1 from "../assets/photo_2025-04-01_02-33-31.jpg"
import photo2 from "../assets/photo_2025-04-05_21-38-56.jpg"
import photo3 from "../assets/photo_2025-04-01_02-34-15.jpg"
import photo4 from "../assets/10662626w.webp"

const Parts = () => {
  return (
    <div id="parts">
        <Linktopart id="1stpart" src={photo1} title="Die Wirkung von Umweltprotesten auf den Klimaschutz"></Linktopart>
        <Linktopart id="2ndpart"src={photo2} title="Einfluss von Protesten auf die Meinung der Macht "></Linktopart>
        <Linktopart src={photo3} title="Einfluss von Protesten auf die gesellschaftliche Meinung"></Linktopart>
        <Linktopart src={photo4} title="Die Storüngen und Zerschlagung durch die Protesten"></Linktopart>
    </div>
  );
};

export default Parts;