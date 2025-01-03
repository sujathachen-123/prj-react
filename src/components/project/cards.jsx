import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import java1 from '../images/java.jpg'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={java1}/>
      <Card.Body>
        <Card.Title>Java Begineer</Card.Title>
        <Card.Text>
          Complete Software Testing Course-Beginner
        </Card.Text>
        <Button variant="primary">Let's Start</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;