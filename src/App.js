import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutMe from './aboutMe.jpg';
function App() {
  return (
    <div className="App">
    <header>
      
    </header>
    <body className="App-header">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md="3" className="h-100">
              <div className="dark-box">
              <img src={aboutMe} alt="It's me" className="my-photo"/>
              </div>
            </Col>

            <Col md="8">
              <div className="dark-box">
                
              
              </div>
            </Col>
          </Row>
        </Container>
    </body>
    <footer>
      <div><p>Stopka</p></div>
    </footer>
  </div>
  );
}

export default App;
