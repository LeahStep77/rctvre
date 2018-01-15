import React from 'react';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import Popover from "../../../node_modules/react-bootstrap/lib/Popover";
import ButtonToolbar from "../../../node_modules/react-bootstrap/lib/ButtonToolbar";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Button from "../../../node_modules/react-bootstrap/lib/Button";
import Panel from "../../../node_modules/react-bootstrap/lib/Panel";







export default class WWAComp extends React.Component {

	render() {
		const popoverTop = (
	<Popover id="popover-positioned-top">
		<strong>Holy guacamole!</strong> Check this info. Check this info. Check this info. Check this info. Check this info.
	</Popover>
);

    return (
    	
    	<div className="well">
		<ButtonToolbar>
		
		<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
			<Button bsStyle="danger" block>Holy guacamole!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxx</Button>
		</OverlayTrigger>	
	</ButtonToolbar>

     </div>

);
}
}
<WWAComp />