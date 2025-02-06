import { TfiGithub } from "react-icons/tfi";

export default function GithubIcon({style}) {
    return(
        <a href="https://github.com/Ianbleake" target="_blank" rel="noopener noreferrer" className={`github ${style}`}>
            <TfiGithub />
        </a>
    )
}