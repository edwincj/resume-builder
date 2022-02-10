import CreatableSelect from "react-select/creatable";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const Skills = () => {
  const AvailableSkills = [
    { value: "PHP", label: "PHP" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Node", label: "Node" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Xamarin", label: "Xamarin" },
    { value: "C++", label: "C++" },
    { value: "Go", label: "Go" },
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const skillAddHandler = value => setSelectedSkills(value);

  useEffect(() => {
    console.log(selectedSkills);
  }, [selectedSkills]);
  return (
    <Container>
      <div>Skills</div>
      <CreatableSelect
        name="skills"
        isMulti
        placeholder="Enter your skills"
        value={selectedSkills}
        onChange={skillAddHandler}
        options={AvailableSkills}
      />
    </Container>
  );
};

export default Skills;
