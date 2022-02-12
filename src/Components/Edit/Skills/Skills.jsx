import CreatableSelect from "react-select/creatable";
import AvailableSkills from "../../../Constants/AvailableSkills";

const Skills = ({ data, addHandler }) => {
  return (
    <div className="section">
      <div className="section-heading">Skills</div>
      <CreatableSelect
        name="skills"
        isMulti
        placeholder="Add skills"
        value={data}
        onChange={addHandler}
        options={AvailableSkills}
      />
    </div>
  );
};

export default Skills;
