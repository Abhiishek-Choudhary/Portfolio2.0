import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import movie from "../../assets/movie.png"
import music from "../../assets/music.png"
import chat from "../../assets/chat.png"
import whatgpt from "../../assets/whatgpt.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={music}
          link="https://spotify2-0-opal.vercel.app/"
          h3="Spotify-M"
          p="Music App"
        />
        <ProjectCard
          src={movie}
          link="https://hianime7.netlify.app/"
          h3="Hianime"
          p="Movie App"
        />
        <ProjectCard
          src={chat}
          link="https://chat-app-ten-alpha-25.vercel.app/"
          h3="You Chat"
          p="Chat App"
        />
        <ProjectCard
          src={whatgpt}
          link="https://whatgpt4.netlify.app/"
          h3="Whatgpt3"
          p="AI App"
        />
      </div>
    </section>
  );
}

export default Projects;
