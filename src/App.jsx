import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className="app"
      style={{
        filter: isDark ? "invert(100%)" : "none",
      }}
    >
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro />
        <Contact />
      </div>
    </div>
  );
}

export default App;
