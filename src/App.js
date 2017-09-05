import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default App;