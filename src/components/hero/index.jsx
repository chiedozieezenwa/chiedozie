import { motion } from "framer-motion"; // Import Framer Motion
import { HashLink as NavLink } from "react-router-hash-link";
import { hero } from "../../assets";
import design from "./hero.module.css";

export const Hero = () => {
  const heroVariants = {
    hide: {
      opacity: 0,
      y: -150,
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

  const featuresVariants = {
    hide: {
      x: -40,
      y: -20,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className={design.container}
      variants={heroVariants}
      initial={"hide"}
      exit={"hide"}
      whileInView={"show"}
    >
      <motion.section
        className={design["left-section"]}
        variants={featuresVariants}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <motion.p
          className={design.hello}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello!
        </motion.p>
        <motion.p
          className={design.intro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am <span>Chiedozie Ezenwa</span>
        </motion.p>
        <motion.p
          className={design.frontend}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Frontend Developer based in Enugu, Nigeria.
        </motion.p>

        <motion.div
          className={design.heroBtn}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="mailto:chiedozieezenwa@gmail.com" className={design.hireBtn}>
            Hire Me
          </a>
          <NavLink to="#projects">
            <motion.button
              className={design.workBtn}
              whileHover={{ scale: 1.1 }}
            >
              My Works
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.section>

      <motion.section
        className={design["right-section"]}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <motion.img
          src={hero}
          alt="Hero Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </motion.section>
    </motion.div>
  );
};
