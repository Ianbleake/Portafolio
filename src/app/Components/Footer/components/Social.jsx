import { TfiTwitterAlt, TfiGithub, TfiLinkedin } from "react-icons/tfi";

export default function Social() {
  return (
    <div className="social_icons">
      <a href="https://twitter.com/olawanle_joel" target="_blank" rel="noopener noreferrer">
        <TfiTwitterAlt />
      </a>
      <a href="https://github.com/olawanlejoel" target="_blank" rel="noopener noreferrer">
        <TfiGithub />
      </a>
      <a href="https://www.linkedin.com/in/olawanlejoel/" target="_blank" rel="noopener noreferrer">
        <TfiLinkedin />
      </a>
    </div>
  );
}
