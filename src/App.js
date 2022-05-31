import './App.scss';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutMe from './aboutMe.jpg';
import React from 'react';
import Menubar from './components/menubar.js';
import Pages from './components/pages.js';
import SocialMedia from './components/socialMedia.js';
import Skills from './components/skills';

function ControlledTabs() {

  return (
    <div className="row">
    <Tabs variant='pills' defaultActiveKey="web" className='tabs-main'>
            <Tab eventKey="web" title="WEBSITE">
              <Pages/>
            </Tab>
      <Tab eventKey="skills" title="ABOUT ME">
        <Skills/>
      </Tab>
      <Tab eventKey="projects" title="PROJECTS">
      <div className="col-12">
                <div className="pb-1 web-box box-container">
                    <p className="title-box "><a href="https://codepen.io/robbin88/pen/wvqOoRz" target="_blank" rel="noreferrer">Konfigurator wycena</a></p>
                  <p>Projekt skończony w około 50%</p>
                </div>
      </div>
      </Tab>
    </Tabs>
    </div>

  );
}

function App() {


  return (
    <div className="app">
    <header>
      
    </header>
    <body className="app-header">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="3" className="text-center">
              <div className="dark-box">
              <img src={aboutMe} alt="It's me" className="my-photo"/>
              <p className="mt-2 my-name"><b>Robert Dudka</b>    </p>
              
              <p className="my-position">Web Developer</p>
             
              <p>A passionate programmer. My first website I made in 2012
                  Since 2019 I have been creating websites based on cms
                  wordpress and joomla. Most of the pages are written with
                  my templates. I use bootstrap, sass, webpack and node.js.
                  I have experience in writing WCAG compliant websites.
                  Knowledge and ability to implement PWA (Progressive
                  web application) to the website.
                  I am currently learning the REACT framework.
                </p>
                  <SocialMedia/>
                   <Menubar/>

              </div>
            </Col>
            <Col lg="8" className='fix-height'>
              
              <div className="dark-box">
               <ControlledTabs/>
              
                
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
