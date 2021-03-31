import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

class Jumbo extends React.Component {
  render() {
    return (
      <>
 <Jumbotron>
  <h1>Hello, world!</h1>
  <img src="https://i2.wp.com/oxfordbookstore.com/wp-content/uploads/2020/04/slide2.jpg?fit=1200%2C350&ssl=1"></img>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</>
      
    );
  }
}

export default Jumbo