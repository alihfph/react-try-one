import React from 'react'
import {Card, Button, Row, FormControl} from 'react-bootstrap'
import history from '../Components/MyBooks.json'


class Books extends React.Component {
  state ={
    search: "",
  }



  render() {

    return (
      <div className="container-fluid">
       <Row>
       <h1 className="ml-5" >{this.props.text}</h1>
        <FormControl className = "mb-5 mx-5"
          placeholder = "search"
          value = {this.state.value}
          onChange={(e)=> this.setState({ search: e.currentTarget.value.toLowerCase() })}
        ></FormControl>

        
       </Row>
       <Row>
  
       {history
       .filter(book=> book.title.toLowerCase().indexOf(this.state.search) !== -1)
       .map(book=>
      
      <Card style={{ width: '18rem' }} className="mx-5 mb-5" >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
       <Card.Title>{book.title}</Card.Title>
  

      <Button className="mt-5"> Add to Cart </Button>

     </Card.Body>
     <Card.Footer>

       {book.price} Euro -{book.category}
     </Card.Footer>
      </Card>)}

      </Row>
      </div>
       

    );
  }
}
export default Books
