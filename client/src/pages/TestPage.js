import React, { Component } from "react";
import "../App.css";
import EventBox from "../components/EventBox";
import ThisJumbotron from "../components/ThisJumbotron";
import Footer from "../components/Footer";
import {SignUpForm, CreateEventForm} from "../components/Form";
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';
import Button from '../../node_modules/react-bootstrap/lib/Button';
import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import ButtonToolbar from '../../node_modules/react-bootstrap/lib/ButtonToolbar';
import {CommentDisplay} from "../components/Comments";
import Parallax1 from "../components/ParallaxTest";
import Map1 from "../components/Map1";






class App extends Component {
  render() {
    return (
      <div className="App">
    
       <ThisJumbotron />
       <Parallax1 />
      <Grid className="map">
          <Row>
            <Col md={12}>
              <h2>Current Disasters</h2>
              <div className="alerts"><Map1 /></div>
            </Col>            
          </Row>
        </Grid>  

        <Footer />      
      </div>     

    );
  }
}

export default App;
