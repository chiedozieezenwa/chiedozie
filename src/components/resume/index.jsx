import Card from "./Card";
import design from "./resume.module.css";
import { motion } from "framer-motion";

export const Resume = () => {
  const resumeVariants = {
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
      <section className={design.firstSection}>
        <p>My Resume</p>
      </section>

      <motion.section
        className={design.belowSection}
        variants={resumeVariants}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        {Card.map((card) => {
          return (
            <div key={card.id} className={design.card}>
              <div>
                <p className={design.duration}>{card.duration}</p>
                <p className={design.role}>{card.role}</p>
                <p className={design.firm}>{card.firm}</p>
              </div>
              <ul>
                {Object.keys(card)
                  .filter((key) => key.startsWith("jobDesc"))
                  .map((key) => (
                    <li key={key} className={design.jobDesc}>
                      {card[key]}
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </motion.section>
    </div>
  );
};
