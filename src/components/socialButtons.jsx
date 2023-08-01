import "../assets/styles/socialButtons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialButtons() {

  return (
    <div>
        <div className="container">
            <ul>
                <li><a href="mailto:lucianamikiochiai@gmail.com"><i className="fa fa-arrows" aria-hidden="true"><FontAwesomeIcon icon={faEnvelope} /></i></a></li>
                <li><a href="https://github.com/LucianaMiki"><i className="fa fa-btc" aria-hidden="true"><FontAwesomeIcon icon={faGithub} /></i></a></li>
                <li><a href="https://www.linkedin.com/in/lucianamikiochiai/"><i className="fa fa-globe" aria-hidden="true"><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
            </ul>
        </div>
    </div>
  );
}

export default SocialButtons;