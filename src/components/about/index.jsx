import { dozie1 } from "../../assets";
import design from "./about.module.css";

export const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV/chiedozie.pdf";
    link.download = "chiedozie.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={design.container}>
      <section className={design["left-section"]}>
        <img src={dozie1} alt="About Me" />
      </section>

      <section className={design["right-section"]}>
        <div className={design.aboutSection}>
          <p>About Me</p>
        </div>

        <div className={design.bio}>
          <p>
            I hold a BSc in Computer Science from Michael Okpara University of
            Agriculture, Umudike, and an MSc from UNN. With 6 years of
            experience as a System Analyst at UNN, I specialize in optimizing
            systems and addressing complex challenges. Recently, I completed a
            Frontend Developer internship through the Learnable program at
            Genesys Tech Hub, where I focused on building user-friendly digital
            solutions.
          </p>
          <div className={design.callToAction}>
            <button onClick={handleDownload}>Download CV</button>
            <a href="mailto:chiedozieezenwa@gmail.com">Contact Me</a>
          </div>
        </div>
      </section>
    </div>
  );
};
