import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Personal from "./Components/Personal/Personal";
import Skills from "./Components/Skills/Skills";
import InitialPersonalDetails from "./Constants/InitialPersonalDetails";

const App = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [details, setDetails] = useState(InitialPersonalDetails);
  const skillAddHandler = value => setSelectedSkills(value);
  const presonalChangeHandler = change => {
    setDetails(prev => ({ ...prev, ...change }));
  };

  return (
    <>
      <Header />
      <Personal
        mode="edit"
        data={details}
        changeHandler={presonalChangeHandler}
      />
      <Skills mode="edit" data={selectedSkills} addHandler={skillAddHandler} />
      <div>
        <Button type="submit">Save</Button>
      </div>
    </>
  );
};

export default App;
