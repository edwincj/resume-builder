import { Container, Row, Col, Form } from "react-bootstrap";
import { MdEmail, MdPhone, MdHome } from "react-icons/md";

const Personal = ({ mode, data, changeHandler }) => {
  return (
    <Container className="section">
      {/* <div className="section__heading">Personal Details</div> */}
      <Row>
        <Col md={6} className="name-container">
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                value={data.name}
                onChange={e => changeHandler({ name: e.target.value })}
              />
            ) : (
              <div className="name">{data.name}</div>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="details-container">
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="email"
                required
                placeholder="Enter Email Id"
                value={data.email}
                onChange={e => changeHandler({ email: e.target.value })}
              />
            ) : (
              <div className="detail">
                <span>
                  <MdEmail />
                </span>
                {data.email}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                type="number"
                required
                placeholder="Enter Phone"
                value={data.phone}
                onChange={e => changeHandler({ phone: e.target.value })}
              />
            ) : (
              <div className="detail">
                <span>
                  <MdPhone />
                </span>
                {data.phone}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            {mode === "edit" ? (
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Enter Adress"
                value={data.address}
                onChange={e => changeHandler({ address: e.target.value })}
              />
            ) : (
              <div className="detail">
                <span>
                  <MdHome />
                </span>
                {data.address}
              </div>
            )}
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Personal;
