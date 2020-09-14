import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Top from './Top';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import CheckOut from './CheckOut';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/product/:id' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);