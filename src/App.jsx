import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./App.css";
import Section from "./Components/Edit/Section/Section";
import Header from "./Components/Header/Header";
import Personal from "./Components/Edit/Personal/Personal";
import Skills from "./Components/Edit/Skills/Skills";
import InitialDetails from "./Constants/InitialPersonalDetails";
import Preview from "./Components/Preview/Preview";

const App = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [personaldetails, setPersonalDetails] = useState(InitialDetails);
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
  };

  const submitHandler = e => {
    e.preventDefault();
    mode === "edit" ? setMode("view") : setMode("edit");
  };

  const editComponent = (
    <Container>
      <Form onSubmit={submitHandler}>
        <Personal
          data={personaldetails}
          changeHandler={presonalChangeHandler}
        />
        <Section
          data={workPlaces}
          changeHandler={setWorkPlaces}
          type="experience"
        />
        <Section
          data={institutes}
          changeHandler={setInstitutes}
          type="education"
        />
        <Skills data={selectedSkills} addHandler={skillAddHandler} />
        <div className="button-container">
          <Button variant="success" type="submit">
            Save
          </Button>
          <Button variant="primary" type="reset" onClick={newHandler}>
            New
          </Button>
        </div>
      </Form>
    </Container>
  );

  const userInfo = {
    personaldetails,
    workPlaces,
    institutes,
    selectedSkills,
  };

  const handlers = {
    submitHandler,
    newHandler,
  };

  return (
    <>
      <Header />
      {mode === "edit" ? (
        editComponent
      ) : (
        <Preview data={userInfo} handlers={handlers} />
      )}
    </>
  );
};

export default App;
