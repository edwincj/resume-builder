import "./App.css";
import Router from "./router";

import { useState, createContext } from "react";

import { MODE_EDIT, MODE_VIEW } from "./Constants/FunctionalConstants";

export const ResumeContext = createContext();

const App = ({ current }) => {
  const [mode, setMode] = useState(current);

  const submitHandler = e => {
    e.preventDefault();
    mode === MODE_EDIT ? setMode(MODE_VIEW) : setMode(MODE_EDIT);
  };

  const contextValue = {
    submitHandler,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      <Router />
    </ResumeContext.Provider>
  );
};

export default App;
