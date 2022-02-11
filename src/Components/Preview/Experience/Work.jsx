import "./Work.css";

const Work = ({ data }) => {
  return (
    <div className="work">
      <div className="year">{`${data.start} - ${data.end}`}</div>
      <div>
        <div className="work-place">{data.name}</div>
        <div className="work-designation">{data.degree}</div>
      </div>
    </div>
  );
};

export default Work;
