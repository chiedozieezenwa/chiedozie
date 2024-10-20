import { motion } from "framer-motion";
import Data from "./Data";
import design from "./projects.module.css";

export const Projects = () => {
  const projectVariants = {
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
        <p>My Projects</p>
      </section>

      <section className={design.rightSection}>
        {Data.map((data) => (
          <motion.div
            key={data.id}
            variants={projectVariants}
            initial="hide"
            whileInView="show"
            exit="hide"
          >
            <img src={data.image} alt="Projects" className={design.projectImg}/>
            <p className={design.imgCaption}>{data.caption}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
