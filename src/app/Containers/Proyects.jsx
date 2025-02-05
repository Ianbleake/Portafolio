import { projectData } from '../utils/ProyectsData';
import { IoLogoGithub } from "react-icons/io";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <IoLogoGithub  className='fa-regular fa-folder-open folder-icon' />
              <div className="small-icons">
                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;