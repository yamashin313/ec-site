import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top from './Top';
import Product from './Product';

class RouteList extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Top} />
        <Route path='/products' component={Product} />
        <Route path='/product/:id' component={Product} />
      </Router>
    )
  }
}

ReactDOM.render(
  <RouteList />,
  document.getElementById('root')
);