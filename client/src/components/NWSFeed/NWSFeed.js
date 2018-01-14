import React, { Component } from "react";



export class NWSFeed extends Component {
	constructor(){
		super();
		this.state={
			information: [],
		};
	}

componentDidMount() {
	fetch('https://api.weather.gov/alerts/active?limit=4')
	.then(results=>{
		return results.json();

	}).then(data => {
		let information = data.features.map((info) => {
			return(
				<div key={info.results}>
				<span>
				<h5>{info.properties.headline}</h5>
				<p>URGENCY:  {info.properties.urgency}.  AREA:  {info.properties.areaDesc}.  DESCRIPTION:  {info.properties.description}</p>
				<p class='line'>CERTAINTY:  {info.properties.certainty}.  INSTRUCTIONS:  {info.properties.instruction} SEVERITY: {info.properties.severity}</p>
				</span>
				</div> 
				)
			})
		this.setState({information: information});
		console.log("state", this.state.information);

	})
}

render(){
	return(
		<div>
			{this.state.information}
		</div>
		)
}
}
export default NWSFeed;





