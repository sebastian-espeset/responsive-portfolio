import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#intro"> Intro</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a
            href="https://soundcloud.com/midi-goblins"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Music
          </a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a
            href="https://github.com/sebastian-espeset"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Github
          </a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a
            href="https://docs.google.com/document/d/1n1y-6cwlAnWHgwiK_v7okG2Q-rPGDbpX-SnY9RAppOg/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Resume
          </a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a
            href="https://www.linkedin.com/in/seba-e/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Linkedin
          </a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </div>
  );
}
