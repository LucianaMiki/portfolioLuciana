import "../assets/styles/socialButtons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialButtons() {

  return (
    <div>
        <div className="container">
            <ul className="list">
                <li><a href="mailto:lucianamikiochiai@gmail.com"><FontAwesomeIcon className="mail-icon" icon={faEnvelope} /></a></li>
                <li><a href="https://github.com/LucianaMiki"><FontAwesomeIcon className="git-icon" icon={faGithub}/></a></li>
                <li><a href="https://www.linkedin.com/in/lucianamikiochiai/"><FontAwesomeIcon className="linkedin-icon" icon={faLinkedin}/></a></li>
            </ul>
        </div>
    </div>
  );
}

export default SocialButtons;