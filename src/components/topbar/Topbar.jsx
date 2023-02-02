import "./topbar.scss";
import { Mail, NightsStay } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen, isDark, setIsDark }) {
  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Smashing.
          </a>
          <div className="itemContainer">
            <NightsStay className="nightstay" onClick={handleDarkMode} />
          </div>
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
