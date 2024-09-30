import Data from "./Data"
import design from "./skills.module.css"

export const Skills = () => {
  return (
    <div className={design.container}>
      <section className={design.header}>
        <p>My Skills</p>
      </section>

      <section className={design.arrItems}>
      {Data.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.Image} alt="Skill Icon" />
            <p>{data.skill}</p>
          </div>
        )})}
      </section>  
    </div>
  )
}
