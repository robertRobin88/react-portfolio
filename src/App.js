import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutMe from './aboutMe.jpg';
import React from 'react';
import Menubar from './components/menubar.js';

function SocialMedia(props) {
  const socialArray = {
    git: {
      web: "https://github.com/robertRobin88/",
      icon: "<i></i>"
    },
    linkedIn: "www.linkediN/pl"
  }
  return (
    <>
    <a href="{socialArray.git.web}">{socialArray.git.web}</a>
    <p>{socialArray.git.icon}</p>
   </>
  )
}
function App() {
  return (
    <div className="app">
    <header>
      
    </header>
    <body className="app-header">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md="3">
              <div className="dark-box">
              <img src={aboutMe} alt="It's me" className="my-photo"/>
              <SocialMedia/>
              <ul className="text-start">
                <li>projekty</li>
                <li>kontakt</li>
              </ul>
              </div>
            </Col>
            <Col md="8">
              <div className="dark-box">
                <Menubar/>
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
