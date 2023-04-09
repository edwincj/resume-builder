import { Col, Form, Row } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { TYPE_EDUCATION } from "../../../Constants/FunctionalConstants";

const Item = ({
  data,
  index,
  deleteHandler,
  editHandler,
  type,
  deleteDisable,
}) => {
  const { id, name, degree, start, end } = data;

  const [Company, Designation] =
    type === TYPE_EDUCATION
      ? ["University", "Degree"]
      : ["Company", "Designation"];

  const changeHandler = changes => {
    editHandler(id, { ...data, ...changes });
  };

  return (
    <>
      <Row className="section-subheader">
        <Col md={1} className="column section-number">
          {index + 1 + ")"}
        </Col>

        <Col md={10}>
          <Row>
            <Col md={6} className="text-box">
              <Form.Control
                type="text"
                required
                id="work"
                name="work"
                placeholder={Company}
                value={name}
                onChange={e => changeHandler({ name: e.target.value })}
              />
            </Col>

            <Col md={6} className="text-box">
              <Form.Control
                type="text"
                required
                id="degree"
                name="degree"
                placeholder={Designation}
                value={degree}
                onChange={e => changeHandler({ degree: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="text-box">
              <Form.Control
                type="number"
                id="start"
                name="start"
                required
                placeholder="Start Year"
                value={start}
                onChange={e => changeHandler({ start: e.target.value })}
              />
            </Col>

            <Col md={6} className="text-box">
              <Form.Control
                type="number"
                id="end"
                name="end"
                required
                placeholder="End Year"
                value={end}
                onChange={e => changeHandler({ end: e.target.value })}
              />
            </Col>
          </Row>
        </Col>

        <Col md={1} className="column">
          <div
            className={`delete-button symbol-button ${
              deleteDisable ? " disabled-button" : ""
            }`}
            onClick={() => !deleteDisable && deleteHandler(id)}
          >
            <BiTrash />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Item;
