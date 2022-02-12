import "./Personal.css";

import { useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { ResumeContext } from "../../../App";

const Personal = ({ data }) => {
  const { presonalChangeHandler } = useContext(ResumeContext);

  return (
    <div className="section">
      <div className="section-heading">Personal Details</div>
      <Row>
        <Col md={6} className="text-box">
          <Form.Control
            type="text"
            required
            id="name"
            name="name"
            placeholder="Enter Name"
            value={data.name}
            onChange={e => presonalChangeHandler({ name: e.target.value })}
          />
        </Col>

        <Col md={6} className="text-box">
          <Form.Control
            required
            type="text"
            placeholder="Enter Designation"
            id="designation"
            name="designation"
            value={data.designation}
            onChange={e =>
              presonalChangeHandler({ designation: e.target.value })
            }
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-box">
          <Form.Control
            type="email"
            required
            id="email"
            name="email"
            placeholder="Enter Email Id"
            value={data.email}
            onChange={e => presonalChangeHandler({ email: e.target.value })}
          />
        </Col>

        <Col md={6} className="text-box">
          <Form.Control
            type="number"
            required
            id="phone"
            name="phone"
            placeholder="Enter Phone"
            value={data.phone}
            onChange={e => presonalChangeHandler({ phone: e.target.value })}
          />
        </Col>
      </Row>

      <Row>
        <Col md={12} className="text-box">
          <Form.Control
            required
            as="textarea"
            rows={2}
            id="address"
            name="address"
            placeholder="Enter Address"
            value={data.address}
            onChange={e => presonalChangeHandler({ address: e.target.value })}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Personal;
