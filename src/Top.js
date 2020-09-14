import React from 'react'
import Cookies from 'universal-cookie';

class Top extends React.Component {
  render(){
    const cookies = new Cookies();
    cookies.set('myCat', 'Pacman');
    console.log(cookies.get('myCat'));
    return(
      <div>
        <h1>Top</h1>
      </div>
    )
  }
}

export default Top;