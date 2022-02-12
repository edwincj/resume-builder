import { useContext } from "react";
import CreatableSelect from "react-select/creatable";
import { ResumeContext } from "../../../App";
import AvailableSkills from "../../../Constants/AvailableSkills";

const Skills = ({ data }) => {
  const { skillAddHandler } = useContext(ResumeContext);
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
