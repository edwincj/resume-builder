import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Personal = ({ mode }) => {
  const initial = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const [details, setDetails] = useState(initial);

  //   useEffect(() => {
  //     console.log(details);
  //   }, [details]);

  const changeHandler = change => {
    setDetails(prev => ({ ...prev, ...change }));
  };

  return (
    <Container>
      <div>Personal Details</div>
      <Form>
        <Row>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={details.name}
                onChange={e => changeHandler({ name: e.target.value })}
              />
            ) : (
              <div>{details.name}</div>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter Email Id"
                value={details.email}
                onChange={e => changeHandler({ email: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter Phone"
                value={details.phone}
                onChange={e => changeHandler({ phone: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Adress"
              value={details.address}
              onChange={e => changeHandler({ address: e.target.value })}
            />
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default Personal;
