import { FaGithub } from "react-icons/fa";
import "./Header.css";

const Header = () => (
  <div className="header">
    <span>Resumé Builder</span>
    <span>
      <a
        href="https://github.com/edwincj/resume-builder"
        target="blank"
        rel="noreferrer noopener"
      >
        <FaGithub />
      </a>
    </span>
  </div>
);

export default Header;
