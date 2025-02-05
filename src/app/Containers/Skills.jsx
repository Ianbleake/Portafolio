import { RiJavascriptFill } from "react-icons/ri";
import { TfiHtml5 } from "react-icons/tfi";
import { TfiCss3 } from "react-icons/tfi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


export default function Skills (){
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <TfiHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <TfiCss3 className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <RiJavascriptFill className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-card node">
          <FaNodeJs className="skill-icon" />
          <p>Node</p>
        </div>
        <div className="skill-card python">
          <FaPython className="skill-icon" />
          <p>Python</p>
        </div>
      </div>
    </div>
  )
}