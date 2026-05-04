import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const categories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Redux", "TypeScript", "Tailwind", "Zod"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Django"],
  },
  {
    label: "Languages",
    skills: ["C++", "Java", "Python"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
  },
];

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.grid}>
        {categories.map(({ label, skills }) => (
          <div key={label} className={styles.categoryCard}>
            <p className={styles.categoryLabel}>{label}</p>
            <div className={styles.skillList}>
              {skills.map(skill => (
                <SkillList key={skill} src={checkMarkIcon} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
