import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class ProductDetail extends React.Component {
  getData() {
    let product = '';
    const id = this.props.match.params.id;
    /*
    const serverUrl = 'https://api.example.com/products/'+id;
    axios.get(serverUrl)
      .then((res) => {
        products = res;
      })
      .catch((error) => {
        console.log(error);
      });
    */
    product = [
      { id: '1', name: 'diamond', price: '12345'}
    ];
    return product;
  }

  addCart(id) {
    /*
    const serverUrl = 'https://api.example.com/carts';
    const param  = {
      product_id : id
    }
    axios.post(serverUrl, param)
      .then((res) => {
        if(res['code'] == '200'){
          alert('Added to cart');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    */
  }

  render() {
    const product = this.getData();
    return (
      <div>
        <h1>ProductDetail</h1>
        <div>{product[0].id}</div>
        <div>{product[0].name}</div>
        <div>{product[0].price}</div>
        <div>
          <button onClick={this.addCart.bind(this, product[0].id)}>Add cart</button>
        </div>
      </div>
    )
  }
}

export default ProductDetail;