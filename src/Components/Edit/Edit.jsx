import Personal from "./Personal/Personal";
import Section from "./Section/Section";
import Skills from "./Skills/Skills";

import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import InitialDetails from "../../Constants/InitialPersonalDetails";
import INITIAL_SECTION_DETAILS from "../../Constants/InitialSection";

import {
  TYPE_EDUCATION,
  TYPE_EXPERIENCE,
} from "../../Constants/FunctionalConstants";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleResume,
  addResume,
  updateResume,
  deleteResume,
} from "../../Reducers/resume";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PopUp from "../Modal/PopUp";

const Edit = ({ create }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [toDelete, setToDelete] = useState("");
  const [personalDetails, setPersonalDetails] = useState(InitialDetails);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const resumeList = useSelector(state => state.resumes.resumeList);

  useEffect(() => {
    if (id) {
      if (resumeList && !resumeList.map(resume => resume.id).includes(id))
        navigate("/");
      dispatch(getSingleResume(id));
    }
    window.scrollTo(0, 0);
  }, [id, resumeList]);

  const resumeDetails = useSelector(state => state.resumes.selectedResume);

  const newHandler = () => {
    setSelectedSkills([]);
    setPersonalDetails(InitialDetails);
    setInstitutes([
      {
        id: uuidv4(),
        ...INITIAL_SECTION_DETAILS,
      },
    ]);
    setWorkPlaces([
      {
        id: uuidv4(),
        ...INITIAL_SECTION_DETAILS,
      },
    ]);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (create) newHandler();
    else if (resumeDetails && !!Object.keys(resumeDetails).length) {
      setSelectedSkills(resumeDetails.selectedSkills);
      setPersonalDetails(resumeDetails.personalDetails);
      setInstitutes(resumeDetails.institutes);
      setWorkPlaces(resumeDetails.workPlaces);
    }
  }, [resumeDetails, create]);

  const presonalChangeHandler = change => {
    setPersonalDetails(prev => ({ ...prev, ...change }));
  };
  const skillAddHandler = value => setSelectedSkills(value);

  // const { submitHandler } = useContext(ResumeContext);
  const submitHandler = e => {
    e.preventDefault();
    const newResume = {
      selectedSkills,
      personalDetails,
      institutes,
      workPlaces,
    };
    if (create) {
      const newId = uuidv4();
      dispatch(addResume({ ...newResume, id: newId }));
      navigate(`/view/${newId}`);
    } else {
      dispatch(updateResume({ ...newResume, id }));
      navigate(`/view/${id}`);
    }
  };

  return create || (id && !!Object.keys(resumeDetails).length) ? (
    <Container>
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
      <Form onSubmit={submitHandler}>
        <Personal
          data={personalDetails}
          changeHandler={presonalChangeHandler}
        />
        <Section
          data={workPlaces}
          type={TYPE_EXPERIENCE}
          changeHandler={setWorkPlaces}
        />
        <Section
          data={institutes}
          type={TYPE_EDUCATION}
          changeHandler={setInstitutes}
        />
        <Skills data={selectedSkills} skillAddHandler={skillAddHandler} />
        <div className="button-container">
          <Button variant="success" type="submit">
            Save
          </Button>
          {create ? null : (
            <Button variant="danger" onClick={() => setToDelete(id)}>
              Delete
            </Button>
          )}
          <Button
            variant="primary"
            type="reset"
            onClick={() => navigate("/new")}
          >
            New
          </Button>
          <Button variant="info" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </Form>
    </Container>
  ) : null;
};

export default Edit;
