import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopUp = props => {
  const submitHandler = () => {
    props.onSubmit();
    props.onHide();
  };

  return (
    <Modal centered {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        {props.onSubmit ? (
          <Button variant="danger" onClick={submitHandler}>
            Delete
          </Button>
        ) : null}
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
