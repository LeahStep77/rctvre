import React from 'react';
import Button from '../../../node_modules/react-bootstrap/lib/Button';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import Map1 from "../Map1";
import "./ThisJumbotron.css";





export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div>
        <body className="abc">
                     
          <Grid>
            <h1 className="JT">Scrolling Text Here?</h1>            
         <br></br>
         <br></br>
         <br></br>
          <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
          <br></br>
         <br></br>
         <br></br>
          <Row className="countDown">
          <Col className="hidden-xs" sm={7} md={5} lg={5}>
          <h1>Hello World</h1>
          </Col>
          </Row>
           </Grid>
          
          
        </body>

      
      </div>
    );
  }
}