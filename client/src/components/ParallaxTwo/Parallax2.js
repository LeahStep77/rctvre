import React, { Component } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import NWSFeed from '../NWSFeed';
import ReadyHarrisFeed from '../ReadyHarrisFeed';



export class Parallax2 extends Component {
  render() {
    return (
      <ParallaxProvider>            
        <Parallax
  				className="custom-class"
			    offsetYMax={15}
			    offsetYMin={-15}
			    slowerScrollRate
			    tag="figure"
		    >
	        <Grid className="theinformation">
            <Row><h2 className='innerinformation'>Most Recent Emergency Alerts</h2>
              <Col md={3}>
                
                <NWSFeed />
              </Col>
              <Col md={3}>
                
                <ReadyHarrisFeed />
              </Col>
            </Row>
          </Grid>   
		    </Parallax>
      </ParallaxProvider>
    );
  }
}
export default Parallax2;