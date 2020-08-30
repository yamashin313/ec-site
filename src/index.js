import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top from './Top';
import Products from './Products';
import ProductDetail from './ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Top} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/product/:id' component={ProductDetail} />
      </Router>
    )
  }
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);