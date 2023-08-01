import * as React from 'react';
import '../assets/styles/home.css';
import HomeButton from './homeButton';
import SocialButtonn from './socialButtons';
import HomeText from './homeText';
import Projects from './projects';
import { useState, useEffect } from 'react';
import ProjectContainer from './projectContainer';

function Home() {
  const [text, setText] = useState("");

  const HandleClick = (textChosen) => {
    setText(textChosen);
  }; 

  const HandleClickHome = () => {
    setText("");
  }

  const renderComponent = () => {
    switch (text) {
      case "":
          return <HomeText />;
      case "login":
          return <ProjectContainer projectChosen={"login"}/>;
      case "project2":
          return <ProjectContainer projectChosen={"project2"}/>;
      default:
          return null;
  }}

  return (
    <div className="site-container">
        <HomeButton HandleClickHome={HandleClickHome}/>
        <SocialButtonn/>
        <Projects HandleClick={HandleClick} />
        {renderComponent()}
    </div>
  );
}

export default Home;
