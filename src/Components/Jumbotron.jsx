import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

class Jumbo extends React.Component {
  render() {
    return (
      <>
 <Jumbotron>
  <h1>Strive Books</h1>
  {/* <img src="#"></img> */}
  <p>
  “Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”
  <b> Charles W. Eliot </b>
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