import React, { Component } from "react";
import Iframe from '../../../node_modules/react-iframe';

export default class Iframe1 extends React.Component {
	render() {
    	return (
    		<div className='ifrm'>
				<Iframe url="https://www.google.org/crisismap/weather_and_events?hl=en&llbox=54.97%2C12.8%2C-32.82%2C-152.88&t=TERRAIN&layers=30%2C1%2C31%2C32%2C1340721332252%3A49%2C20%2C12%2Clayer9%2C2%2Clayer1%2Clayer0%2Clayer8%2C10%2C13%2C1340721268837%2C1343411315379&embedded=true" style="border: 1px solid #ccc"
			        width="100%"
			        height="600px"
			        id="myId"
			        className="myClassname"
			        display="block"
			        position="relative"
			        allowFullScreen sandbox/>
			</div>
 		);
  	}
}

