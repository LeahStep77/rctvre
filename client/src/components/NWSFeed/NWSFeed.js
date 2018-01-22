import React, { Component } from "react";
import Popover from "../../../node_modules/react-bootstrap/lib/Popover";
import ButtonToolbar from "../../../node_modules/react-bootstrap/lib/ButtonToolbar";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Button from "../../../node_modules/react-bootstrap/lib/Button";
import Panel from "../../../node_modules/react-bootstrap/lib/Panel";
import Grid from "../../../node_modules/react-bootstrap/lib/Grid";
import Row from "../../../node_modules/react-bootstrap/lib/Row";
import Col from "../../../node_modules/react-bootstrap/lib/Col";


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
			return(
				<div key={info.results}>
				
				<h5>{info.properties.headline}</h5>
				<p>URGENCY:  {info.properties.urgency}.  AREA:  {info.properties.areaDesc}.  DESCRIPTION:  {info.properties.description}</p>
				<p>CERTAINTY:  {info.properties.certainty}.  INSTRUCTIONS:  {info.properties.instruction} SEVERITY: {info.properties.severity}</p>
				
				</div> 
				)
			})
		this.setState({information: information});
		// console.log("state", this.state.information);

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
	const popover5 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[5]}</p>
	</Popover>
	);
		const popover6 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[6]}</p>
	</Popover>
	);
		const popover7 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[7]}</p>
	</Popover>
	);
	const popover8 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[8]}</p>
	</Popover>
	);
		const popover9 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[9]}</p>
	</Popover>
	);
	const popover10 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[10]}</p>
	</Popover>
	);
		const popover11 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[11]}</p>
	</Popover>
	);
		const popover12 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[12]}</p>
	</Popover>
	);
	const popover13 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[13]}</p>
	</Popover>
	);
		const popover14 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[14]}</p>
	</Popover>
	);
	const popover15 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[15]}</p>
	</Popover>
	);
		const popover16 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[16]}</p>
	</Popover>
	);
		const popover17 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[17]}</p>
	</Popover>
	);
	const popover18 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[18]}</p>
	</Popover>
	);
		const popover19 = (
	<Popover id="popover-positioned-top">
		<p>{this.state.information[19]}</p>
	</Popover>
	);
	return(
			<div className="overflow" style={wellStyles}>
				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[0]}
					</Button>
				</OverlayTrigger>

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[1]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[2]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[3]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[4]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[5]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[6]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[7]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[8]}
					</Button>
				</OverlayTrigger>	

				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button bsStyle="primary" bsSize="large" block className="firstTitle">
						{this.state.information[9]}
					</Button>
				</OverlayTrigger>	

			</div>
		)
}
}
export default NWSFeed;
