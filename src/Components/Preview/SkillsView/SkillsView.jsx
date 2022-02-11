import { Badge } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./SkillsView.css";

const SkillsView = ({ data }) => {
  console.log(data);
  return (
    <div className="preview-section">
      <div className="side-bar">
        <div className="title">Skills</div>
      </div>
      <div className="content">
        {data.length > 0 ? (
          data.map(skill => (
            <Badge pill bg="secondary" key={uuidv4()} className="skill-label">
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
