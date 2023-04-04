import AvailableSkills from "../../../Constants/AvailableSkills";
import CreatableSelect from "react-select/creatable";

const Skills = ({ data, skillAddHandler }) => {
  return (
    <div className="section">
      <div className="section-heading">Skills</div>
      <CreatableSelect
        name="skills"
        isMulti
        placeholder="Add skills"
        value={data}
        onChange={skillAddHandler}
        options={AvailableSkills}
      />
    </div>
  );
};

export default Skills;
