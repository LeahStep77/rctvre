import React, { Component } from "react";
import Iframe from '../../../node_modules/react-iframe';

export default class Iframe1 extends React.Component {
	render() {
    	return (
    		<div className='ifrm'>
				<Iframe url="https://www.google.com/maps/d/embed?mid=1MTgllFxJ4cqQ8wb2b-OIcYCXHmps3gkI"
			        width="100%"
			        height="750px"
			        id="myId"
			        className="myClassname"
			        display="block"
			        position="relative"
			        allowFullScreen sandbox/>
			</div>
 		);
  	}
}