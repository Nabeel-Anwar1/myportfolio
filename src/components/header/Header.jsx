import "./header.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import Me from "../../assests/me2.png"

const Header = () => {
  return (
    <section id="header">
      <header id="header">
        <div className="container header__container">
          {/* <div className="header__profile">
          <img src={Me} alt="Nabeel" className="MeImg"/>
        </div> */}
          <h3>Nabeel Anwar</h3>
          <p>Software Developer</p>
          <small>JavaScript | REACT | Node.js | Express.js | PSQL | Jest</small>
          <div className="header__cta">
            <a href="#contact" className="Button primary">
              Get in contact!
            </a>
            <a href="#projects" className="Button primary">
              My Work
            </a>
          </div>
          <div className="header__socials">
            <a
              href="https://www.linkedin.com/in/nabeel-anwar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={"3rem"} />
            </a>
            <a
              href="https://github.com/nabeel-anwar1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<AiFillGithub size={"3rem"} />}
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
