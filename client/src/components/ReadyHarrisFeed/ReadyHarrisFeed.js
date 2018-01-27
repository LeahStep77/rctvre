import React, { Component } from "react";
import Popover from "../../../node_modules/react-bootstrap/lib/Popover";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Button from "../../../node_modules/react-bootstrap/lib/Button";


const wellStyles = { maxWidth: 800, margin: '0 auto 10px' };

export class ReadyHarrisFeed extends Component {
	constructor(){
		super();
		this.state={
			information: [],
		};
	}

componentDidMount() {
	fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.readyharris.org%2FDesktopModules%2FBlog%2FAPI%2FRSS%2FGet%3Ftabid%3D3855%26moduleid%3D15754')
	.then(results=>{
		return results.json();

	}).then(data => {
		let information = data.items.map((info) => {

			const popoverTop = (
					<Popover id="popover-positioned-top">
					<h4>{info.title}</h4>
						<p>DESCRIPTION:  {info.description}</p>
						<p>PUBLICATION DATE:  {info.pubDate}, LINK: {info.link}</p>
						<p>{info.thumbnail} {info.categories}</p>
					</Popover>
					);

			return(
				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
					<Button key= {info.results }bsStyle="primary" bsSize="large" block className="firstTitle">
						{info.title}
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
export default ReadyHarrisFeed;
