import React from 'react'
import Cookies from 'universal-cookie';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

class Top extends React.Component {
  render(){
    const cookies = new Cookies();
    cookies.set('myCat', 'Pacman');
    console.log(cookies.get('myCat'));
    return(
      <div>
        <Container>
          <Row className="mt-4">
            <Col>
              <Jumbotron>
                <h1>test</h1>
                <p>
                  testtesttest
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Top;