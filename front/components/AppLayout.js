import { Container, Row, Col } from "react-bootstrap";
import LoginBlock from "./login";
import Gallery from "./gallery";

const AppLayout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={5}>
            <LoginBlock />
          </Col>
          <Col md={7}>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppLayout;
