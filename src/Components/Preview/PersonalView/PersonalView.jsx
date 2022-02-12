import "./PersonalView.css";
import { MdEmail, MdPhone, MdHome } from "react-icons/md";
const PersonalView = ({ data }) => {
  return (
    <div className="personal-view-container">
      <div className="name">{data.name}</div>
      <div className="designation">{data.designation}</div>
      <div className="details">
        <div>
          <MdPhone />
          <div>{data.phone}</div>
        </div>
        <div>
          <MdEmail />
          <div>{data.email}</div>
        </div>
        <div className="home-address">
          <MdHome />
          <div>{data.address}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalView;
