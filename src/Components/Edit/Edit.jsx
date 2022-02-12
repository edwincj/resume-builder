import { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ResumeContext } from "../../App";
import Personal from "./Personal/Personal";
import Section from "./Section/Section";
import Skills from "./Skills/Skills";
import {
  TYPE_EDUCATION,
  TYPE_EXPERIENCE,
} from "../../Constants/FunctionalConstants";

const Edit = ({ data }) => {
  const { personalDetails, workPlaces, institutes, selectedSkills } = data;
  const { submitHandler, newHandler, setWorkPlaces, setInstitutes } =
    useContext(ResumeContext);
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Personal data={personalDetails} />
        <Section
          data={workPlaces}
          type={TYPE_EXPERIENCE}
          changeHandler={setWorkPlaces}
        />
        <Section
          data={institutes}
          type={TYPE_EDUCATION}
          changeHandler={setInstitutes}
        />
        <Skills data={selectedSkills} />
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
};

export default Edit;
