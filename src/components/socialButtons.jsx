import "../assets/styles/socialButtons.css";

function SocialButtons() {

  return (
    <div>
        <div className="container">
            <ul>
                <li><a><i className="fa fa-arrows" aria-hidden="true"></i></a></li>
                <li><a><i className="fa fa-btc" aria-hidden="true"></i></a></li>
                <li><a><i className="fa fa-globe" aria-hidden="true"></i></a></li>
                <li><a><i className="fa fa-home" aria-hidden="true"></i></a></li>
                <li><a><i className="fa fa-repeat" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
  );
}

export default SocialButtons;