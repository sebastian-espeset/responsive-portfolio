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
      strings: [
        "developer ",
        "shredder ",
        "mistake maker ",
        "3d artist ",
        "producer ",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/pickerimage.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hey there , </h2>
          <h1> I'm Sebastian Espeset</h1>
          <h3>
            {" "}
            Full stack <span ref={textRef}></span>
          </h3>
          <div className="paragraph">
            <p>Intentionally crafted & thoughtfully made. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
