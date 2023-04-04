import Experience from "./Experience/Experience";
import PersonalView from "./PersonalView/PersonalView";
import SkillsView from "./SkillsView/SkillsView";

import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getSingleResume, deleteResume } from "../../Reducers/resume";

import {
  TYPE_EDUCATION,
  TYPE_EXPERIENCE,
} from "../../Constants/FunctionalConstants";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../Modal/PopUp";

const Preview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [toDelete, setToDelete] = useState("");
  const resumeDetails = useSelector(state => state.resumes.selectedResume);
  const resumeList = useSelector(state => state.resumes.resumeList);

  useEffect(() => {
    if (id) {
      if (resumeList && !resumeList.map(resume => resume.id).includes(id))
        navigate("/");
      dispatch(getSingleResume(id));
    }
  }, [id, resumeList]);
  const { personalDetails, workPlaces, institutes, selectedSkills } =
    resumeDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PopUp
        show={!!toDelete.length}
        onHide={() => setToDelete("")}
        onSubmit={() => {
          dispatch(deleteResume(toDelete));
          navigate("/");
        }}
        message={`Are you sure you want to delete this resumé?`}
        title={"Delete"}
      />
      {id && !!Object.keys(resumeDetails).length ? (
        <>
          <PersonalView data={personalDetails} />
          <Experience data={workPlaces} type={TYPE_EXPERIENCE} />
          <Experience data={institutes} type={TYPE_EDUCATION} />
          <SkillsView data={selectedSkills} />
          <Container className="button-container">
            <Button variant="success" onClick={() => navigate(`/edit/${id}`)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => setToDelete(id)}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => navigate("/new")}>
              New
            </Button>
            <Button variant="info" onClick={() => navigate("/")}>
              Home
            </Button>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Preview;
