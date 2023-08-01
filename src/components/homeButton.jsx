import "../assets/styles/homeButton.css";

function HomeButton({HandleClickHome}) {

  return (
    <div className="buttons-container">
        <button className="button-arounder" onClick={event => HandleClickHome()}>Luciana Miki</button>
    </div>
  );
}

export default HomeButton;