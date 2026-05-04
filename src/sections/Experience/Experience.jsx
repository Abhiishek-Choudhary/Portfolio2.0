import styles from "./ExperienceStyles.module.css";

const devtownSkills = ["Node.js", "React.js", "MongoDB", "Express.js", "REST APIs"];
const gimSkills = ["Python", "Django", "Docker", "Kubernetes", "CI/CD", "AWS", "REST APIs", "Bitbucket"];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <div className={styles.companyRow}>
            <h3 className={styles.company}>DEVTOWN</h3>
          </div>
          <p className={styles.role}>Full Stack Development Intern</p>
          <p className={styles.meta}>Jun 2024 – Aug 2024 &nbsp;·&nbsp; Jaipur, Rajasthan</p>
          <div className={styles.skills}>
            {devtownSkills.map(skill => (
              <span key={skill} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
          <a
            href="https://medicare-abhishek.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectBtn}
          >
            View Internship Project →
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.companyRow}>
            <h3 className={styles.company}>Gim Info Solutions</h3>
            <span className={styles.ycBadge}>Y Combinator</span>
          </div>
          <p className={styles.role}>Software Developer</p>
          <p className={styles.meta}>Jul 2025 – Present &nbsp;·&nbsp; Jaipur, Rajasthan</p>
          <div className={styles.skills}>
            {gimSkills.map(skill => (
              <span key={skill} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
