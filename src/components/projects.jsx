import "../assets/styles/projects.css";

function Projects({HandleClick}) {
  return (
    <div className="projects-container">
        <h3 className="projects-title">Projects</h3>
        <ul className="project-list">
            <li>
                <button className="button" onClick={event => HandleClick("login")}>Login screen</button>
            </li>
            <li>
                <button className="button" onClick={event => HandleClick("project2")}>Project 2</button>
            </li>
        </ul>           
    </div>
  );
}

export default Projects;