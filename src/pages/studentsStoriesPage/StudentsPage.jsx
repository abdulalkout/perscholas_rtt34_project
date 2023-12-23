import React from "react";
import "./StudentsPage.css";
import { useParams } from "react-router-dom";
import developersStories from "../../module/developersStories";

function StudentsPage() {
  const index = useParams().index;

  return (
    <div>

    <div className="part-n">
      <div>
        <h1 className="meet-h1">Meet {developersStories[index].name}</h1>
        <p className="paragraph1">
          {developersStories[index].story}
        </p>
      </div>

      <div className="image-container">
        <img className="dev-image" src={developersStories[index].img} alt="image" />
      </div>
    </div>

    <div className="part-n">
    <div>
        <h1 className="project-h1">Projects and Contributions</h1>
        <p className="paragraph2">
          {developersStories[index].story}
        </p>
      </div>
      <div className="project-container">
        <ul className="project-list">
          <h4>You can access the projects here:</h4>
          {developersStories[index].projects.map((project, i) => {
            return (
              <li key={i}>
                {project}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default StudentsPage;
