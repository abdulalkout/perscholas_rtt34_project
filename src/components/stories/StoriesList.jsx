import React from "react";
import "./Stories.css";
import { useContext } from "react";
import { DevelopersStoriesContext } from "../../contexts/storiesContext/DevelopersStoriesContext";

function StoriesList() {
  const { developersStories } = useContext(DevelopersStoriesContext);

  return (
    <div>
      <p className="storiesTitle">Students Stories</p>
      <div className="studentList">
        {developersStories.map((student, index) => {
          return <img className="studentImg" src={student.img} />;
        })}
      </div>
    </div>
  );
}

export default StoriesList;
