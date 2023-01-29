import "./Links.css"
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiLinkedin, SiYoutube } from "react-icons/si";

function Links({ page }){
    return (
        <ul className={`links ${page}`}>
            <li className="item"><a href="https://github.com/vitox013" target="_blank"><FaGithub/></a></li>
            <li className="item"><a href="https://www.youtube.com/channel/UCF1vs6Zu1fidfaGSgxYBPhw" target="_blank"><SiYoutube/></a></li>
            <li className="item"><a href="https://www.linkedin.com/in/vitor-muller/" target="_blank"><SiLinkedin/></a></li>
        </ul>
    )
}

export default Links;