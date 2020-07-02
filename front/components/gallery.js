import { Card } from "react-bootstrap";
import styled from "styled-components";

const MyCard = styled(Card)`
  margin-bottom: 10px;
`;

const Gallery = () => {
  return (
    <div>
      <MyCard>
        <Card.Body>This is some text within a card body.</Card.Body>
      </MyCard>
      <MyCard>
        <Card.Body>This is some text within a card body.</Card.Body>
      </MyCard>
      <MyCard>
        <Card.Body>This is some text within a card body.</Card.Body>
      </MyCard>
      <MyCard>
        <Card.Body>This is some text within a card body.</Card.Body>
      </MyCard>
    </div>
  );
};

export default Gallery;
