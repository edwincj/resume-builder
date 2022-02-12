import "./SkillsView.css";

import { Badge } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

const SkillsView = ({ data }) => {
  const uuidList = useRef(Array.from({ length: data.length }, () => uuidv4()));

  return (
    <div className="preview-section">
      <div className="side-bar">
        <div className="title">Skills</div>
      </div>
      <div className="skill-content">
        {data.length > 0 ? (
          data.map((skill, index) => (
            <Badge
              pill
              bg="secondary"
              key={uuidList.current[index]}
              className="skill-label"
            >
              {skill.label}
            </Badge>
          ))
        ) : (
          <div className="empty-message">
            {`Skills are valuable to recruiters to determine whether you're fit for the role. Click Edit to add.`}
          </div>
        )}
      </div>
      <div className="line" />
    </div>
  );
};

export default SkillsView;
