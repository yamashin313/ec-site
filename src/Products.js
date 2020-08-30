import React from 'react'
import { Link } from 'react-router-dom'

class Products extends React.Component {
  render() {
    const items = [
      { id: '1', name: 'diamond', price: '12345'},
      { id: '2', name: 'chain', price: '6789'}
    ];
  
    const itemList = items.map((item, index) =>
      <li key={index}><Link to={'/product/'+item.id}>{item.name}</Link></li>
    );
    return (
      <div>
        <h1>Products</h1>
        <ul>{itemList}</ul>
      </div>
    )
  }
}

export default Products;