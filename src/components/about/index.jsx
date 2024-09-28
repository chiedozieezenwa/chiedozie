import { dozie1 } from "../../assets";
import design from "./about.module.css";

export const About = () => {
  return (
    <div className={design.container}>
      <section className={design['left-section']}>
        <img src={dozie1} alt="About Me" />
      </section>

      <section className={design['right-section']}>
        <div className={design.aboutSection}>
          <p>About Me</p>
        </div>

        <div className={design.bio}>
          <p>
            Hi, I’m Chiedozie Ezenwa, with a BSc in Computer Science from
            Michael Okpara University of Agriculture, Umudike, and an MSc from
            UNN. I’ve spent 6 years as a System Analyst at UNN, optimizing
            systems and solving complex challenges. Recently, I completed a
            Frontend Developer internship through the Learnable program at
            Genesys Tech Hub, expanding my skills in building user-focused
            digital solutions.
          </p>
          <div className={design.callToAction}>
            <a href="/CV/chiedozie.pdf" download="chiedozie.pdf">Download CV</a>
            <a href="mailto:chiedozieezenwa@gmail.com">Contact Me</a>
          </div>
        </div>
      </section>
    </div>
  );
};
