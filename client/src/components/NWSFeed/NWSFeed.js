import React, { Component } from "react";



export class NWSFeed extends Component {
	constructor(){
		super();
		this.state={
			pictures: [],
		};
	}

componentDidMount() {
	fetch('https://api.weather.gov/alerts/active?limit=5')
	.then(results=>{
		return results.json();

	}).then(data => {
		let pictures = data.features.map((pic) => {
			return(
				<div key={pic.results}>
				<span>
				<h4>{pic.properties.headline}</h4>
				<p>URGENCY:  {pic.properties.urgency}.  AREA:  {pic.properties.areaDesc}.  DESCRIPTION:  {pic.properties.description}</p>
				<p class='line'>CERTAINTY:  {pic.properties.certainty}.  INSTRUCTIONS:  {pic.properties.instruction} SEVERITY: {pic.properties.severity}</p>
				</span>
				</div> 
				)
			})
		this.setState({pictures: pictures});
		console.log("state", this.state.pictures);

	})
}

render(){
	return(
		<div>
			{this.state.pictures}
		</div>
		)
}
}
export default NWSFeed;





