import { Container, Row, Col, Form } from "react-bootstrap";

const Personal = ({ mode, data, changeHandler }) => {
  return (
    <Container className="section">
      <div className="section__heading">Personal Details</div>
      <Form>
        <Row>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={data.name}
                onChange={e => changeHandler({ name: e.target.value })}
              />
            ) : (
              <div>{data.name}</div>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              {mode === "edit" ? (
                <Form.Control
                  type="email"
                  placeholder="Enter Email Id"
                  value={data.email}
                  onChange={e => changeHandler({ email: e.target.value })}
                />
              ) : (
                <div>{data.email}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              {mode === "edit" ? (
                <Form.Control
                  type="number"
                  placeholder="Enter Phone"
                  value={data.phone}
                  onChange={e => changeHandler({ phone: e.target.value })}
                />
              ) : (
                <div>{data.phone}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Adress"
                value={data.address}
                onChange={e => changeHandler({ address: e.target.value })}
              />
            ) : (
              <div>{data.address}</div>
            )}
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default Personal;
