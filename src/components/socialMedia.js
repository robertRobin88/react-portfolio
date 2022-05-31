import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

function SocialMedia () {
return (
    <ul class="socialMedia">
        <li><a href="https://github.com/robertRobin88"><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href="https://pl.linkedin.com/in/robert-dudka-a9940b1b5"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li><a href="mailto:robert_robin88@wp.pl"><FontAwesomeIcon icon={faEnvelope}/>  </a></li>
    </ul>
    
)
}
export default SocialMedia;