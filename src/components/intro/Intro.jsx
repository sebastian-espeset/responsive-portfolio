import "./intro.scss";

import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["developer ", "shredder ", "mistake maker "],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/DSC_2726.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Sebastian Espeset</h1>
          <h3>
            {" "}
            Full stack <span ref={textRef}></span>
          </h3>
        </div>
          {" "}

        {/* Leaving this commented, may add in the future, don't like the look <a href="#portfolio">
                    <KeyboardArrowDownIcon className="icon"/>
                </a> */}
      </div>
    </div>
  );
}
