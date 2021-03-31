import React from 'react'
import {Card, Button, Row, FormControl} from 'react-bootstrap'
import history from '../Components/MyBooks.json'


class Books extends React.Component {
  state ={
    search: ""
  }
  render() {
    return (
      <div className="container-fluid">
       <Row>
       <h1>{this.props.text}</h1>
        <FormControl className = "mb-4"
          placeholder = "search"
          value = {this.state.value}
          onChange={(e)=> this.setState({ search: e.currentTarget.value.toLowerCase() })}
        ></FormControl>

        
       </Row>
       <Row>
  
       {history
       .filter(book=> book.title.toLowerCase().indexOf(this.state.search) !== -1)
       .map(book=>
      
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
       <Card.Title>{book.title}</Card.Title>
      <Button variant="primary">Add to Cart {book.price} & - ({book.category})</Button>
     </Card.Body>
      </Card>)}
      </Row>
      </div>
       

    );
  }
}
export default Books
