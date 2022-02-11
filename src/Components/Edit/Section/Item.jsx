import { Button, Col, Form, Row } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";

const Item = ({ data, index, deleteHandler, editHandler, type }) => {
  const { id, name, degree, start, end } = data;

  const [Company, Designation] =
    type === "education"
      ? ["University", "Degree"]
      : ["Company", "Designation"];

  const changeHandler = changes => {
    editHandler(id, { ...data, ...changes });
  };

  return (
    <>
      <Row className="section-subheader">
        <Col md={1} className="column">
          {index + 1 + ")"}
        </Col>

        <Col md={10}>
          <Row>
            <Col md={6} className="text-box">
              <Form.Control
                type="text"
                required
                placeholder={Company}
                value={name}
                onChange={e => changeHandler({ name: e.target.value })}
              />
            </Col>

            <Col md={6} className="text-box">
              <Form.Control
                type="text"
                required
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
          <Button variant="danger" onClick={() => deleteHandler(id)}>
            <BiTrash />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Item;
