import "./App.css";
import Header from "./Components/Header/Header";
import InitialDetails from "./Constants/InitialPersonalDetails";
import Preview from "./Components/Preview/Preview";
import Edit from "./Components/Edit/Edit";
import { v4 as uuidv4 } from "uuid";
import INITIAL_SECTION_DETAILS from "./Constants/InitialSection";

import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MODE_EDIT, MODE_VIEW } from "./Constants/FunctionalConstants";

export const ResumeContext = createContext();

const App = ({ current }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [personalDetails, setPersonalDetails] = useState(InitialDetails);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [mode, setMode] = useState(current);

  const navigate = useNavigate();

  const skillAddHandler = value => setSelectedSkills(value);

  const presonalChangeHandler = change => {
    setPersonalDetails(prev => ({ ...prev, ...change }));
  };

  const newHandler = () => {
    setSelectedSkills([]);
    setPersonalDetails(InitialDetails);
    setInstitutes([
      {
        id: uuidv4(),
        ...INITIAL_SECTION_DETAILS,
      },
    ]);
    setWorkPlaces([
      {
        id: uuidv4(),
        ...INITIAL_SECTION_DETAILS,
      },
    ]);
    setMode(MODE_EDIT);
    window.scrollTo(0, 0);
  };

  const submitHandler = e => {
    e.preventDefault();
    mode === MODE_EDIT ? setMode(MODE_VIEW) : setMode(MODE_EDIT);
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

  useEffect(() => {
    navigate("/" + mode);
  }, [mode]);

  useEffect(() => {
    if (
      mode === MODE_VIEW &&
      JSON.stringify(InitialDetails) === JSON.stringify(personalDetails)
    )
      setMode(MODE_EDIT);
  }, []);

  return (
    <>
      <Header />
      <ResumeContext.Provider value={contextValue}>
        {mode === MODE_EDIT ? (
          <Edit data={userInfo} />
        ) : (
          <Preview data={userInfo} />
        )}
      </ResumeContext.Provider>
    </>
  );
};

export default App;
