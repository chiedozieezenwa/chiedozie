import Card from "./Card";
import design from "./resume.module.css";

export const Resume = () => {
  return (
    <div className={design.container}>
      <section className={design.firstSection}>
        <p>My Resume</p>
      </section>

      <section className={design.belowSection}>
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
                    <li key={key} className={design.jobDesc}>{card[key]}</li>
                  ))}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
};
