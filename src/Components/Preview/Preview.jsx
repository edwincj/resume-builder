import Experience from "./Experience/Experience";
import PersonalView from "./PersonalView/PersonalView";
import SkillsView from "./SkillsView/SkillsView";
import { Button, Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { ResumeContext } from "../../App";

const Preview = ({ data }) => {
  const { personalDetails, workPlaces, institutes, selectedSkills } = data;
  const { submitHandler, newHandler } = useContext(ResumeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PersonalView data={personalDetails} />
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
