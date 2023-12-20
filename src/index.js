import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// importing contexts
import DevelopersStoriesContextProvider from "./contexts/storiesContext/DevelopersStoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DevelopersStoriesContextProvider>
      <App />
    </DevelopersStoriesContextProvider>
  </React.StrictMode>
);

reportWebVitals();
