import "./works.scss";
import {useState} from "react";

export default function Works() {
  const [currentSlide,setCurrentSlide]=useState(0);
  const data= 
  [{
    id: 1,
    icon:"",
    title: "Web Social Media App",
    desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",
  },
  {
    id: 2,
    icon:"",
    title: "Web Rampa UI Design",
    desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: "https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900",
  },
  {
    id: 3,
    icon:"",
    title: "Web E-commerce Design",
    desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: "https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?compress=1&resize=1200x900",
  }];
  const handleClick=(way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:2) :
    setCurrentSlide(currentSlide < data.length-1 ?currentSlide+1:0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map(d=> (
        <div className="container">
          <div className="item">
            <div className="left">
                <div className="leftContainer">
                    <div className="imgContainer">
                        <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>
                       {d.desc}
                    </p>
                    <span>Projects</span>
                </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" alt="" className="arrow right"onClick={()=>handleClick("left")}/>
    </div>
  );
}
