import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class CheckOut extends React.Component {
  getData() {
    let products = '';
    /*
    const id = this.props.match.params.id;
    const serverUrl = 'https://api.example.com/carts/'+id;
    axios.get(serverUrl)
      .then((res) => {
        products = res;
      })
      .catch((error) => {
        console.log(error);
      });
    */
    products = [
      { id: '1', name: 'diamond', price: '12345'},
      { id: '2', name: 'chain', price: '6789'},
      { id: '3', name: 'perl', price: '54321'},
    ];
    return products;
  }

  render() {
    const products = this.getData();
    const itemList = products.map((item, index) =>
        <li key={index}>{item.name} {item.price}</li>
    );
    return (
      <div>
        <h1>CheckOut</h1>
        <ul>{itemList}</ul>
        <duv>PaymentInfo</duv>
      </div>
    )
  }
}

export default CheckOut;