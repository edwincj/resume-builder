import Experience from "./Experience/Experience";
import PersonalView from "./PersonalView/PersonalView";
import SkillsView from "./SkillsView/SkillsView";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";

const Preview = ({ data, handlers }) => {
  const { personaldetails, workPlaces, institutes, selectedSkills } = data;
  const { submitHandler, newHandler } = handlers;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PersonalView data={personaldetails} />
      <Experience data={workPlaces} type={"experience"} />
      <Experience data={institutes} type={"education"} />
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
};

export default Preview;
