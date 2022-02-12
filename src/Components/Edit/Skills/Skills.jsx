import AvailableSkills from "../../../Constants/AvailableSkills";
import CreatableSelect from "react-select/creatable";

import { useContext } from "react";
import { ResumeContext } from "../../../App";

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
