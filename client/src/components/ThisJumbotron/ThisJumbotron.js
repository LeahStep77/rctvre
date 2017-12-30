import React from 'react';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import "./ThisJumbotron.css";





export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div className="abc">                    
        <Grid>  
          <Col className="hidden-xs" sm={7} md={5} lg={5}>
            <h1 className="JT">Scrolling text here?</h1>
          </Col>
        </Grid>
      </div>
    );
  }
}
