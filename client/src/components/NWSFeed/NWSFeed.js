import React, { Component } from "react";
import Popover from "../../../node_modules/react-bootstrap/lib/Popover";
import ButtonToolbar from "../../../node_modules/react-bootstrap/lib/ButtonToolbar";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Button from "../../../node_modules/react-bootstrap/lib/Button";
import Panel from "../../../node_modules/react-bootstrap/lib/Panel";




export class NWSFeed extends Component {
	constructor(){
		super();
		this.state={
			information: [],
		};
	}

componentDidMount() {
	fetch('https://api.weather.gov/alerts/active?limit=6')
	.then(results=>{
		return results.json();

	}).then(data => {
		let information = data.features.map((info) => {
			return(
				<div key={info.results}>
				
				<h5>{info.properties.headline}</h5>
				<p>URGENCY:  {info.properties.urgency}.  AREA:  {info.properties.areaDesc}.  DESCRIPTION:  {info.properties.description}</p>
				<p>CERTAINTY:  {info.properties.certainty}.  INSTRUCTIONS:  {info.properties.instruction} SEVERITY: {info.properties.severity}</p>
				
				</div> 
				)
			})
		this.setState({information: information});
		console.log("state", this.state.information);

	})
}

render(){
		const popoverTop = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[0]}</p>
	</Popover>
	);
		const popover1 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[1]}</p>
	</Popover>
	);
		const popover2 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[2]}</p>
	</Popover>
	);
	const popover3 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[3]}</p>
	</Popover>
	);
		const popover4 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[4]}</p>
	</Popover>
	);
	return(
		<div className="well">
		
		<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
			<Button bsStyle="danger" block className="firstTitle">{this.state.information[0]}</Button>
		</OverlayTrigger>	
	
		<OverlayTrigger trigger="click" placement="top" overlay={popover1}>
			<Button bsStyle="danger" block className="firstTitle">{this.state.information[1]}</Button>
		</OverlayTrigger>

		<OverlayTrigger trigger="click" placement="top" overlay={popover2}>
			<Button bsStyle="danger" block className="firstTitle">{this.state.information[2]}</Button>
		</OverlayTrigger>

		<OverlayTrigger trigger="click" placement="top" overlay={popover3}>
			<Button bsStyle="danger" block className="firstTitle">{this.state.information[3]}</Button>
		</OverlayTrigger>

		<OverlayTrigger trigger="click" placement="top" overlay={popover3}>
			<Button bsStyle="danger" block className="firstTitle">{this.state.information[4]}</Button>
		</OverlayTrigger>
	

     </div>
		)
}
}
export default NWSFeed;
