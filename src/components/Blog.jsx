import "../styles/blog.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Blog() {
 
    return (
      <div className="main-blog-page">
      <Container>
    <div className="row">
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      </div>
      <div  className="row">
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      </div>
    </Container>
    </div>
    );
}