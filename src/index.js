import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// importing contexts
import DevelopersStoriesContextProvider from "./contexts/storiesContext/DevelopersStoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DevelopersStoriesContextProvider>
        <App />
      </DevelopersStoriesContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
