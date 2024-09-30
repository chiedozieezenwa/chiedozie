import { HashLink as NavLink } from "react-router-hash-link"
import { hero } from "../../assets"
import design from "./hero.module.css"

export const Hero = () => {
  return (
    <div className={design.container}>
        <section className={design['left-section']}>
          <p className={design.hello}>Hello!</p>
          <p className={design.intro}>I am <span>Chiedozie Ezenwa</span></p>
          <p className={design.frontend}>A Frontend Developer based in Enugu, Nigeria.</p>
          <div className={design.heroBtn}>
            <a href="mailto:chiedozieezenwa@gmail.com" className={design.hireBtn}>Hire Me</a>
            <NavLink to="#projects"><button className={design.workBtn}>My Works</button></NavLink>
          </div>
        </section>

        <section className={design["right-section"]}>
          <img src={hero} alt="Hero Image" />
        </section>
    </div>
  )
}
