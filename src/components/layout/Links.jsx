import "./Links.css"
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";

function Links(){
    return (
        <ul className="links">
            <li className="item"><a href="https://github.com/vitox013" target="_blank"><FaGithub/></a></li>
            <li className="item"><a href="mailto:vitor.muller310@gmail.com" target="_blank"><SiGmail/></a></li>
            <li className="item"><a href="https://www.linkedin.com/in/vitor-muller/" target="_blank"><SiLinkedin/></a></li>
        </ul>
    )
}

export default Links;