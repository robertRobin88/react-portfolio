import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutMe from './aboutMe.jpg';
import React from 'react';
import Menubar from './components/menubar.js';
import Pages from './components/pages.js';
import SocialMedia from './components/socialMedia.js';
import MenuTabs from './components/tabs';





function App() {
  return (
    <div className="app">
    <header>
      
    </header>
    <body className="app-header">
        <Container fluid>
        <Menubar/>
          <Row className="justify-content-center">
            <Col md="2" className="text-center">
              <div className="dark-box">
              <img src={aboutMe} alt="It's me" className="my-photo"/>
              <p className="mt-2"><b>Robert Dudka</b>    </p>
              <p>Front-End Developer</p>
              <SocialMedia/>
             
              <p>A passionate programmer. My first website I made in 2012
Since 2019 I have been creating websites based on cms
wordpress and joomla. Most of the pages are written with
my templates. I use bootstrap, sass, webpack and node.js.
I have experience in writing WCAG compliant websites.
Knowledge and ability to implement PWA (Progressive
web application) to the website.
I am currently learning the REACT framework.</p>
              </div>
            </Col>
            <Col md="9">
              <div className="dark-box">
                <MenuTabs/>
                
                <Pages/>
              </div>
            </Col>
          </Row>
        </Container>
    </body>
    <footer>
      <div><p>Designed & Developed by Robert Dudka</p></div>
    </footer>
  </div>
  );
}

export default App;
