import "./Experience.css";
import Work from "./Work";

const Experience = ({ type, data }) => {
  return (
    <>
      <div className="preview-section">
        <div className="side-bar">
          <div className="title">{type}</div>
        </div>
        <div className="content">
          {data.length > 0 ? (
            data.map(item => <Work key={item.id} data={item} />)
          ) : (
            <div className="empty-message">
              {`No ${type} has been provided. Adding ${type} improves chances of getting hired. Click Edit to add.`}
            </div>
          )}
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Experience;
