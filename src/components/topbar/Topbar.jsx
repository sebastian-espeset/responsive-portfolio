import "./topbar.scss";
import { Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Smashing.
          </a>
          {/* <div className="itemContainer">
              <NightsStay className="icon"/>
              <span>505-670-0005</span>
          </div> */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span> sebastian.c.espeset@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
