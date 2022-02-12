import { useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import InitialDetails from "./Constants/InitialPersonalDetails";
import Preview from "./Components/Preview/Preview";
import Edit from "./Components/Edit/Edit";

export const ResumeContext = createContext();

const App = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [personalDetails, setPersonalDetails] = useState(InitialDetails);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [mode, setMode] = useState("edit");

  const skillAddHandler = value => setSelectedSkills(value);

  const presonalChangeHandler = change => {
    setPersonalDetails(prev => ({ ...prev, ...change }));
  };

  const newHandler = () => {
    setSelectedSkills([]);
    setPersonalDetails(InitialDetails);
    setInstitutes([]);
    setWorkPlaces([]);
    setMode("edit");
    window.scrollTo(0, 0);
  };

  const submitHandler = e => {
    e.preventDefault();
    mode === "edit" ? setMode("view") : setMode("edit");
  };

  const contextValue = {
    submitHandler,
    newHandler,
    presonalChangeHandler,
    skillAddHandler,
    setWorkPlaces,
    setInstitutes,
  };

  const userInfo = {
    personalDetails,
    workPlaces,
    institutes,
    selectedSkills,
  };

  return (
    <>
      <Header />
      <ResumeContext.Provider value={contextValue}>
        {mode === "edit" ? (
          <Edit data={userInfo} />
        ) : (
          <Preview data={userInfo} />
        )}
      </ResumeContext.Provider>
    </>
  );
};

export default App;
