import React, { useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={1000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Message</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </>
  );
};

export default ErrorMessage;
