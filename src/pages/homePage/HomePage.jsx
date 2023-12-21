import React from "react";

//import components
import Introduction from "../../components/introduction/Introduction";
import StoriesList from "../../components/stories/StoriesList";
import StudentsApi from "../../components/studentsApi/StudentsApi";

function HomePage() {
  return (
    <div>
      <Introduction />
      <StoriesList />
      <StudentsApi />
    </div>
  );
}

export default HomePage;
