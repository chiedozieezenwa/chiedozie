import design from "./cert.module.css";
import { motion } from "framer-motion";

export const Cert = () => {
  const certVariants = {
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
        <p>My Certificates</p>
      </section>
      <motion.div
        className={design.certificates}
        variants={certVariants}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <motion.section
          className={design.interncert}
          variants={certVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <p>Frontend Intern, Genesys</p>
        </motion.section>
        <motion.section
          className={design.degree}
          variants={certVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <p>B.Sc Computer Science</p>
        </motion.section>
        <motion.section
          className={design.leadership}
          variants={certVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <p>Exemplary Leadership Award, Genesys</p>
        </motion.section>
        <motion.section
          className={design.meta}
          variants={certVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <p>Meta Frontend Developer, Coursera</p>
        </motion.section>
      </motion.div>
    </div>
  );
};
