import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return(
      <div>
        <ul>
            <li><Link to='/'>Top</Link></li>
            <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;