import React, { Component } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import NWSFeed from '../NWSFeed';



export class Parallax1 extends Component {
  render() {
    return (
      <ParallaxProvider>            
        <Parallax
  				className="custom-class"
			    offsetYMax={5}
			    offsetYMin={-25}
			    slowerScrollRate
			    tag="figure"
		    >
	        <Grid className="theinformation">
            <Row>
              <Col md={12}>
                <h2 className='theinformation'>Emergency Alerts</h2>
                <NWSFeed />
              </Col>
            </Row>
          </Grid>   
		    </Parallax>
      </ParallaxProvider>
    );
  }
}
export default Parallax1;