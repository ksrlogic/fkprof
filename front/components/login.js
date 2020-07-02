import { Container, Row, Col, Form } from "react-bootstrap";

const LoginBlock = () => {
  return (
    <>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default LoginBlock;
