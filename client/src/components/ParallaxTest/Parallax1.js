import React, { Component } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';



export class Parallax1 extends Component {
  render() {
    return (
      <ParallaxProvider>            
        <Parallax
  				className="custom-class"
			    offsetYMax={35}
			    offsetYMin={-35}
			    slowerScrollRate
			    tag="figure"
		    >
	        <Grid className="info">
            <Row>
              <Col md={4}>
                <h2>FEMAAPI</h2>
                <div className="alerts"></div>
              </Col>
              <Col md={4}>
                <h2>FEMAAPI</h2>
                <div className="alerts"></div>
              </Col>
              <Col md={4}>
                <h2>FEMAAPI</h2>
                <div className="alerts"></div>
              </Col>
            </Row>
          </Grid>   
		    </Parallax>
      </ParallaxProvider>
    );
  }
}
export default Parallax1;