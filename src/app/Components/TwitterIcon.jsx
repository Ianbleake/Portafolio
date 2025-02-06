import { TfiTwitterAlt } from "react-icons/tfi";

export default function TwitterIcon({style}) {
    return (
        <a href="https://twitter.com/olawanle_joel" target="_blank" rel="noopener noreferrer" className={`twitter ${style}`}>
            <TfiTwitterAlt />
        </a>
    )
}