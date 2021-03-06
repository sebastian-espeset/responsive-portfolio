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
          <img src="assets/DSC_2743.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Oh hi there!</h2>
          <h1> I'm Sebastian Espeset</h1>
          <h3>
            {" "}
            Full stack <span ref={textRef}></span>
          </h3>
        </div>
        <p style={{ "margin-top": "10px","margin-left":"45px","font-size": "20px" }}>
          {" "}
          This portfolio site is a work in progress. <br></br>
          <p>Please note, none of the projects currently listed are real.</p>
        <p>I followed a tutorial by Lama Dev, found</p><a href="https://www.youtube.com/watch?v=7WwtzsSHdpI"> here</a>
        </p>
        {/* Leaving this commented, may add in the future, don't like the look <a href="#portfolio">
                    <KeyboardArrowDownIcon className="icon"/>
                </a> */}
      </div>
    </div>
  );
}
