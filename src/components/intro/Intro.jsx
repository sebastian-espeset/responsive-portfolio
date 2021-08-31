import "./intro.scss"

import {useEffect, useRef} from "react"; 
import {init} from "ityped"; 

export default function Intro() {
    const textRef=useRef()
    
    useEffect(() => {
        init(
            textRef.current,{
                showCursor:true,
                backDelay:1500,
                backSpeed:60, 
                strings:["developer ","shredder ","mistake maker "]
            }
        )
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
                    <h3> Full stack <span ref={textRef}></span></h3>
                </div>
                    <p style={{"margin-top":"10px","font-size":"50px"}}> This portfolio site is a work in progress. The scaffolding is done, I just need to add some projects and iron out some silly bugs.<br></br><p>Please note, none of the projects currently listed are real.</p></p>
                {/* Leaving this commented, may add in the future, don't like the look <a href="#portfolio">
                    <KeyboardArrowDownIcon className="icon"/>
                </a> */}
            </div>
        </div>
    )
}
