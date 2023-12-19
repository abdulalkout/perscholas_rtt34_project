import React from "react";

//import components
import Introduction from "../../components/introduction/Introduction";
import StoriesList from "../../components/stories/StoriesList";

function HomePage() {
  return (
    <div>
      <Introduction />
      <StoriesList />
    </div>
  );
}

export default HomePage;
