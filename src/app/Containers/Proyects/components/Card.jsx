import { IoLogoGithub } from "react-icons/io";
import { Link } from '@/i18n/routing.ts'

export default function Card ({link,title,description, data}) {
  return(
    <div className="project-card">
      <div className="project-header">
        <a href={link} target="_blank" >
          <IoLogoGithub  className='fa-regular fa-folder-open folder-icon' />
        </a>
        <div className="small-icons">
          {/* Aqui van los iconos de las tecnologias de cada proyecto */}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href="#">Ver mas</Link>
    </div>
  )
}