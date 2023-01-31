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
        {/* <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#testimonials"> Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact"> Contact</a>
        </li> */}
      </ul>
    </div>
  );
}
