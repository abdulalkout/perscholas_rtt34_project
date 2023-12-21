import React from "react";
import { createContext } from "react";
import apiData from "../../module/apiData";

export const APIContext = createContext(apiData);

function APIContextProvider(props) {
  return <APIContext.Provider value={{}}>{props.children}</APIContext.Provider>;
}

export default APIContextProvider;
