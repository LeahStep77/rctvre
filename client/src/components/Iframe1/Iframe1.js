import React, { Component } from "react";
import Iframe from '../../../node_modules/react-iframe';

export default class Iframe1 extends React.Component {
	render() {
    	return (
    		<div>
				<Iframe url="https://www.google.org/crisismap/weather_and_events?hl=en&llbox=30.18649%2C30.14159%2C-95.4056%2C-95.52284&t=TERRAIN&layers=30%2C1%2C31%2C32%2C1340721332252%3A49%2C20%2C12%2Clayer9%2C2%2Clayer1%2Clayer8%2C10%2C13%2Clayer0&embedded=true"
			        width="100%"
			        height="600px"
			        id="myId"
			        className="myClassname"
			        display="initial"
			        position="relative"
			        allowFullScreen/>
			</div>
 		);
  	}
}