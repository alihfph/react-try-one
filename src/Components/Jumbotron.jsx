import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

class Jumbo extends React.Component {
  render() {
    return (
      <>
 <Jumbotron>
  <h1>Hello, world!</h1>
  {/* <img src="#"></img> */}
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