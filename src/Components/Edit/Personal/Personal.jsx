import { Row, Col, Form } from "react-bootstrap";
import "./Personal.css";

const Personal = ({ data, changeHandler }) => {
  return (
    <div className="section">
      <div className="section-heading">Personal Details</div>
      <Row>
        <Col md={6} className="text-box">
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
            value={data.name}
            onChange={e => changeHandler({ name: e.target.value })}
          />
        </Col>

        <Col md={6} className="text-box">
          <Form.Control
            type="text"
            placeholder="Enter Designation"
            id="designation"
            name="designation"
            required
            value={data.designation}
            onChange={e => changeHandler({ designation: e.target.value })}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-box">
          <Form.Control
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter Email Id"
            value={data.email}
            onChange={e => changeHandler({ email: e.target.value })}
          />
        </Col>

        <Col md={6} className="text-box">
          <Form.Control
            type="number"
            id="phone"
            name="phone"
            required
            placeholder="Enter Phone"
            value={data.phone}
            onChange={e => changeHandler({ phone: e.target.value })}
          />
          {/* </Form.Group>
          <Form.Group className="mb-3"> */}
        </Col>
      </Row>

      <Row>
        <Col md={12} className="text-box">
          <Form.Control
            as="textarea"
            rows={2}
            id="address"
            name="address"
            required
            placeholder="Enter Address"
            value={data.address}
            onChange={e => changeHandler({ address: e.target.value })}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Personal;
