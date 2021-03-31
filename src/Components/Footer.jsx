import React from 'react'
import {Card, Button} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <>
 <Card className="text-center bg-dark">
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="danger">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</>
      
    );
  }
}

export default Footer