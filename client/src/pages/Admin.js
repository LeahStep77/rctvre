import React, { Component } from "react";
import "../App.css";
import ThisJumbotron from "../components/ThisJumbotron";
import Footer from "../components/Footer";
import Parallax1 from "../components/ParallaxTest";
import Iframe1 from "../components/Iframe1";
import TwitR from "../components/TwitR";







class App extends Component {
  render() {
    return (
      <div className="App">
       <ThisJumbotron />

       
       <Iframe1 />
       <Footer />
      </div>     

    );
  }
}

export default App;