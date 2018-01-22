import React from 'react';

import Col from '../../../node_modules/react-bootstrap/lib/Col';
import "./ThisJumbotron.css";
import Carousel from "../../../node_modules/react-bootstrap/lib/Carousel";





export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div className="abc"> 
      <Col className="hidden-xs" sm={12} md={12} lg={125}>                  
            <Carousel>
    <Carousel.Item>
      <Carousel.Caption className="hidden-xs">
        <h3>Neighbors</h3>
        <h3>Helping</h3>
        <h3>Neighbors</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>Volunteer & Respond</h3>
        <h3>to Local Disasters</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>Get Rescued</h3>
        <h3>by Local</h3>
        <h3>Volunteers</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Col>
      </div>
    );
  }
}
