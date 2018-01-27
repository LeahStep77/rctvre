import React, { Component } from "react";
import Popover from "../../../node_modules/react-bootstrap/lib/Popover";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Button from "../../../node_modules/react-bootstrap/lib/Button";


const wellStyles = { maxWidth: 800, margin: '0 auto 10px' };

export class NWSFeed extends Component {
	constructor(){
		super();
		this.state={
			information: [],
		};
	}

componentDidMount() {
	fetch('https://api.weather.gov/alerts?point=29.7752,-95.3103')
	.then(results=>{
		return results.json();

	}).then(data => {
		let information = data.features.map((info) => {

			const popoverTop = (
				<Popover id="popover-positioned-top">
					<h5>{info.properties.headline}</h5>
					<p>URGENCY:  {info.properties.urgency}.  AREA:  {info.properties.areaDesc}.  DESCRIPTION:  {info.properties.description}</p>
					<p>CERTAINTY:  {info.properties.certainty}.  INSTRUCTIONS:  {info.properties.instruction} SEVERITY: {info.properties.severity}</p>
				</Popover>
					);

			return(

				<OverlayTrigger key={info.results} trigger="click" placement="top" overlay={popoverTop}>
					<Button key= {info.results}bsStyle="primary" bsSize="large" block className="firstTitle">
						{info.properties.headline}
					</Button>
				</OverlayTrigger>	
				)
			})

		let text='';
		let i=[];
		<h1>{ information }</h1>
		document.getElementById('feed').innerHTML=text;
		this.setState({information: information});
		// console.log("state", this.state.information);

	})
}

render(){
	return(

		<div id='feed' className="overflow" style={wellStyles}>
			{this.state.information}			
		</div>

		)
}
}
export default NWSFeed;
