import CreatableSelect from "react-select/creatable";
import { Container } from "react-bootstrap";
import AvailableSkills from "../../Constants/AvailableSkills";

const Skills = ({ mode, data, addHandler }) => {
  return (
    <Container className="section">
      <div className="section__heading">Skills</div>
      {mode === "edit" ? (
        <CreatableSelect
          name="skills"
          isMulti
          placeholder="Enter your skills"
          value={data}
          onChange={addHandler}
          options={AvailableSkills}
        />
      ) : (
        <div className="section__content">
          {data.length === 0
            ? "Add some skills to attract hirers"
            : data.map(d => d.label).join("| ")}
        </div>
      )}
    </Container>
  );
};

export default Skills;
