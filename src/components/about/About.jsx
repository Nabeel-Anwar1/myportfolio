import "./about.css"
import CV from "../../assests/CV-Nabeel_Anwar.pdf"
import {HiDownload} from "react-icons/hi"
import AboutMeImg from "../../assests/me3.jpg"

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutMeImg} alt="Nabeel Anwar" className="aboutimg"/>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me!</h2>
          <p>Hi, my name is Nabeel. I am a graduate from the University of Leicester. I studied mathematics and it was during my degree that I found my passion for coding. After completing my stuides at university, I decided to join a bootcamp where I could learn how to code. I found Northcoders and it was there I learned how to code in JavaScript and learned all the tools I would need to succeed in a software development workplace. I am keen to learn new things, whether it be in a coding language I know or a new language entirely.</p>
          <p>From the bootcamp I also gained valuable experience in working individually and as part of a team. Also, a big part of coding is solving problems and finding solutions, at the bootcamp I learned how to effectively and efficiently research and problem-solve, this involved understanding how to read the documentation for relevant information and sort through information in a productive way. When working in groups, we adopted the use of AGILE methodology, participated in paired programming and had daily scrum meetings, all of which are practices used in the field. </p>
          <p>I am looking to progress in the software development field and learn all that I can.</p>
          <a href={CV} download className="Button primary"><HiDownload /> Download my CV! </a>
        </div>
      </div>
    </section>
  )
}

export default About