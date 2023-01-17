import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header>
      <nav className="nav">
        <Link className="nav-title" to="/">
          Pokédex
        </Link>
        <button className="nav-button" onClick={handleShow}>
          <AiOutlineMenu />
        </button>
        <ul className={show ? "nav-group show" : "nav-group"} id="nav-group">
          <li className="nav-link">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/keiber-urbila/"
              rel="noopener"
            >
              <AiFillLinkedin /> LinkedIn
            </a>
          </li>
          <li className="nav-link">
            <a
              target="_blank"
              href="https://github.com/metalpoch/"
              rel="noopener"
            >
              <AiFillGithub /> Github
            </a>
          </li>
          <li className="nav-link">
            <a
              target="_blank"
              href="https://www.instagram.com/keiberup/"
              rel="noopener"
            >
              <AiFillInstagram /> Instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
