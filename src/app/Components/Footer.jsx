import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Joel's Portfolio
        </p>
        <div className="social_icons">
          <a href="https://twitter.com/olawanle_joel" aria-label="Twitter" target="_blank" rel="noopener noreferrer" >
            <TfiTwitterAlt />
          </a>
          <a href="https://github.com/olawanlejoel" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <TfiGithub />
          </a>
          <a href="https://www.linkedin.com/in/olawanlejoel/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <TfiLinkedin />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;