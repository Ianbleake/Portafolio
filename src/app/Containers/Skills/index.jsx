
import { useTranslations } from "next-intl";
import { RiJavascriptFill } from "react-icons/ri";
import { TfiHtml5 } from "react-icons/tfi";
import { TfiCss3 } from "react-icons/tfi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import Skill from "./components/Skill";

const iconMap = {
  HTML: TfiHtml5,
  CSS: TfiCss3,
  JavaScript: RiJavascriptFill,
  React: FaReact,
  Node: FaNodeJs,
  Python: FaPython
};

export default function Skills() {
  const t = useTranslations("homepage.skills");
  const technologies = t.raw("tech");

  return (
    <div className="skills-container">
      <h2>{t("title")}</h2>
      <div className="grid-skills">
        {Object.entries(technologies).map(([key, value]) => {
          const IconComponent = iconMap[value.name] || null;
          return (
            <Skill key={key} name={value.name}>
              {IconComponent && <IconComponent className="skill-icon" />}
            </Skill>
          );
        })}
      </div>
    </div>
  );
}