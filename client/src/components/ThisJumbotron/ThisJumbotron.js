import React from 'react';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import "./ThisJumbotron.css";
import Carousel from "../../../node_modules/react-bootstrap/lib/Carousel";
import CarouselItem from "../../../node_modules/react-bootstrap/lib/CarouselItem";
import CarouselCaption from "../../../node_modules/react-bootstrap/lib/CarouselCaption";






export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div className="abc">                    
            <Carousel>
    <Carousel.Item>
      <Carousel.Caption class="jt">
        <h3 class="jt">Neighbors</h3>
        <h3>Helping</h3>
        <h3>Neighbors</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>Volunteer & Respond</h3>
        <h3>to Local Disaster's</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>Get Rescued</h3>
        <h3>by Local Volunteers</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
    );
  }
}
