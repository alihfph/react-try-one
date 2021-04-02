import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Mynavbar from './Components/Navbar.jsx';
import Jumbo from './Components/Jumbotron.jsx';
import Books from './Components/Books.jsx';
import Footer from './Components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
   <Mynavbar />
   <Jumbo />
   <Books text= "Search Books"/>
   <Footer />
    </div>
  );
}

export default App;
