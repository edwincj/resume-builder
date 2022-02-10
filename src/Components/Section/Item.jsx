import { Button, Col, Form, Row } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";

const Item = ({ mode, data, index, deleteHandler, editHandler, type }) => {
  const { id, name, degree, year } = data;

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
        <Col md={1}>{index + 1 + ")"}</Col>
        <Col md={10}>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="text"
                required
                placeholder={Company}
                value={name}
                onChange={e => changeHandler({ name: e.target.value })}
              />
            ) : (
              <div className="section-subheading">{name}</div>
            )}
          </Form.Group>
        </Col>
        <Col md={1}>
          {mode === "edit" && (
            <Button variant="danger" onClick={() => deleteHandler(id)}>
              <BiTrash />
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="text"
                required
                placeholder={Designation}
                value={degree}
                onChange={e => changeHandler({ degree: e.target.value })}
              />
            ) : (
              <>
                <div>{Designation}</div>
                <div>{degree}</div>
              </>
            )}
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="number"
                required
                placeholder="Years"
                value={year}
                onChange={e => changeHandler({ year: e.target.value })}
              />
            ) : (
              <>
                <div>Years</div>
                <div>{year}</div>
              </>
            )}
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default Item;
