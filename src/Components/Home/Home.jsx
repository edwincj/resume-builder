import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { getSingleResume, deleteResume } from "../../Reducers/resume";
import PopUp from "../Modal/PopUp";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toDelete, setToDelete] = useState("");
  const resumes = useSelector(state => state.resumes.resumeList);
  return (
    <div className="table-container">
      <PopUp
        show={!!toDelete.length}
        onHide={() => setToDelete("")}
        onSubmit={() => dispatch(deleteResume(toDelete))}
        message={`Are you sure you want to delete this resumé?`}
        title={"Delete"}
      />
      <div className="create-button-container">
        <span>Click on the row to view</span>
        <Button
          variant="primary"
          type="reset"
          onClick={() => navigate("/new")}
          className="create-button"
        >
          Create
        </Button>
      </div>

      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {!resumes.length ? (
            <tr>
              <td colSpan={4} className="empty-message">
                No resumés to view. Please create one.
              </td>
            </tr>
          ) : (
            resumes.map((resume, index) => (
              <tr
                key={resume.id}
                onClick={() => {
                  dispatch(getSingleResume(resume.id));
                  navigate(`/view/${resume.id}`);
                }}
              >
                <td>{index + 1}</td>
                <td>{resume.personalDetails.name}</td>
                <td>{resume.personalDetails.designation}</td>
                <td className="action-column">
                  <div
                    className="delete-button symbol-button"
                    onClick={e => {
                      e.stopPropagation();
                      setToDelete(resume.id);
                    }}
                  >
                    <BiTrash />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
