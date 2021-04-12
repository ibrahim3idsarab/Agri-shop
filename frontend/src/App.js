import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./index.css"
import {Container} from 'react-bootstrap'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import CartScreen from './screens/CartScreen'
import Signup from './screens/Signup'

const App = ()=> {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
      <Route path='/' component={HomeScreen} exact></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
      <Route path='/login' component={LoginScreen}></Route>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path='/signup' component={Signup}></Route>
      </Container>
      </main>
    <Footer />
    </Router>
  );
}

export default App
