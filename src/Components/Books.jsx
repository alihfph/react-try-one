import React from 'react'
import {Card, Button, Row, FormControl} from 'react-bootstrap'
import history from '../Components/MyBooks.json'


class Books extends React.Component {
  state ={
    search: "",
    cart:[]
  }

  componentDidMount(){
    this.initializeCart()
  } 

  initializeCart(){
    const cartInLocal = localStorage.getItem("cart");
    if(cartInLocal){
      const cart = JSON.parse(cartInLocal)
      this.setState({cart})
    }
    else{
     localStorage.setItem("cart",JSON.stringify([]))
    }
  }
  addToCard = (book) => {
    this.setState(
      (prevState)=>

       this.setState({cart:[...prevState.cart,book]})
    ,
    ()=>{
      localStorage.setItem("cart",JSON.stringify(this.state.cart))
    }
    
    )

  }
  isInCart =(book) => this.state.cart.some(b=>book.asin===b.asin)

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
      
      <Card style={{ width: '18rem' }} className="ml-4 mb-5" >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
       <Card.Title>{book.title}</Card.Title>

      <Button className="mt-5" block disabled={this.isInCart(book)} onClick={()=>this.addToCard(book)} variant={!this.isInCart(book) ?"primary":"danger"}>{this.isInCart(book)?"Added to Cart ":" Add to Cart"}</Button>

     </Card.Body>
     <Card.Footer>

       {book.price}
     </Card.Footer>
      </Card>)}
      </Row>
      </div>
       

    );
  }
}
export default Books
