import { motion } from "framer-motion";
import Data from "./Data";
import design from "./skills.module.css";

export const Skills = () => {
  const skillVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 200,
      },
    },
  };

  return (
    <div className={design.container}>
      <section className={design.header}>
        <p>My Skills</p>
      </section>

      <section className={design.arrItems}>
        {Data.map((data) => (
          <motion.div
            key={data.id}
            variants={skillVariants}
            initial="hide"
            whileInView="show"
            exit="hide"
          >
            <img src={data.Image} alt="Skill Icon" />
            <p>{data.skill}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
