import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./App.css";
import Section from "./Components/Edit/Section/Section";
import Header from "./Components/Header/Header";
import Personal from "./Components/Edit/Personal/Personal";
import Skills from "./Components/Edit/Skills/Skills";
import InitialDetails from "./Constants/InitialPersonalDetails";
import PersonalView from "./Components/Preview/PersonalView/PersonalView";
import Experience from "./Components/Preview/Experience/Experience";
import SkillsView from "./Components/Preview/SkillsView/SkillsView";

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

  const viewComponent = (
    <>
      <PersonalView data={personaldetails} />
      <Experience type={"experience"} data={workPlaces} />
      <Experience type={"education"} data={institutes} />
      <SkillsView data={selectedSkills} />
      <Container className="button-container">
        <Button variant="success" onClick={submitHandler}>
          Edit
        </Button>
        <Button variant="primary" onClick={newHandler}>
          New
        </Button>
      </Container>
    </>
  );

  return (
    <>
      <Header />
      {mode === "edit" ? editComponent : viewComponent}
    </>
  );
};

export default App;
