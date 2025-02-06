import { TfiLinkedin } from "react-icons/tfi";

export default function LinkdinIcon({style}) {
    return(
        <a href="https://www.linkedin.com/in/angel-ivan-rangel-8782601b0/" target="_blank" rel="noopener noreferrer" className={`linkdin ${style}`} >
            <TfiLinkedin />
        </a>
    )
}