import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class ProductDetail extends React.Component {
  getData() {
    let product = '';
    /*
    const serverUrl = 'https://api.example.com/products';
    axios.get(serverUrl)
      .then((res) => {
        products = res;
      })
      .catch(console.error);
    */
    product = [
      { id: '1', name: 'diamond', price: '12345'}
    ];
    return product;
  }

  render() {
    const product = this.getData();
    return (
      <div>
        <h1>ProductDetail</h1>
        <div>{this.props.match.params.id}</div>
        <div>{product[0].name}</div>
        <div>{product[0].price}</div>
      </div>
    )
  }
}

export default ProductDetail;