import "../assets/styles/projectContainer.css";
import { useState, useEffect } from 'react';
import loginImage from '../assets/images/login.png';
import project2Image from '../assets/images/project2.jpeg';

function ProjectContainer(props) {
  const [projectChosen, setProjectChosen] = useState({
    project : {
      title: "",
      description: "",
      image: null
    }
  });
  const login = {
    project : {
      title: "Login project",
      description: "This is the login project",
      image: loginImage
    }
  };

  const project2 = {
    project: {
      title: "project2",
      description: "This is the project2",
      image: project2Image
    }
  };

  useEffect(()=>{
    switch(props.projectChosen) {
      case "login":
          setProjectChosen({project: login.project});
        break;
      case "project2":
          setProjectChosen({project: project2.project});
        break;
      default:
        break;
    };
  }, [props]) 

  return (
    <div className="project-container">
        <img className="project-iamge" src={projectChosen.project.image}></img>
        <div className="project-title">{projectChosen.project.title}</div>
        <div className="project-description">{projectChosen.project.description}</div>
    </div>
  );
}

export default ProjectContainer;