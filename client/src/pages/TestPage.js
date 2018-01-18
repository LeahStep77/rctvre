import React, { Component } from "react";
import "../App.css";
import ThisJumbotron from "../components/ThisJumbotron";
import Footer from "../components/Footer";
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';
import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Parallax1 from "../components/ParallaxTest";
import Iframe1 from "../components/Iframe1";
import NatCap from "../components/NatCap";






class App extends Component {
  render() {
    return (
      <div className="App">
       <ThisJumbotron />
       <NatCap />

       <Footer />
      </div>     

    );
  }
}

export default App;
