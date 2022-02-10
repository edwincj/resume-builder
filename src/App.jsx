import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./App.css";
import Section from "./Components/Section/Section";
import Header from "./Components/Header/Header";
import Personal from "./Components/Personal/Personal";
import Skills from "./Components/Skills/Skills";
import InitialDetails from "./Constants/InitialPersonalDetails";

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

  return (
    <>
      <Header />
      <Form onSubmit={submitHandler}>
        <Personal
          mode={mode}
          data={personaldetails}
          changeHandler={presonalChangeHandler}
        />
        <Section
          mode={mode}
          data={workPlaces}
          changeHandler={setWorkPlaces}
          type="experience"
        />
        <Section
          mode={mode}
          data={institutes}
          changeHandler={setInstitutes}
          type="education"
        />
        <Skills
          mode={mode}
          data={selectedSkills}
          addHandler={skillAddHandler}
        />
        <Container className="button-container">
          <Button variant="info" type="reset" onClick={newHandler}>
            New
          </Button>
          {mode === "edit" ? (
            <Button variant="success" type="submit">
              Save
            </Button>
          ) : (
            <Button variant="warning" type="submit">
              Edit
            </Button>
          )}
        </Container>
      </Form>
    </>
  );
};

export default App;
