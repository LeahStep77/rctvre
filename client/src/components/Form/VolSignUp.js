import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { SingleInput } from "./SingleInput";
import "./Form.css";
import { Link } from 'react-router-dom';
import Auth from "../../modules/Auth";
import { FileInput } from "./FileInput";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';
import {storage} from '../../firebase/fire';
import FormFoot from '../FormFoot';
import Checkbox from '../../../node_modules/react-bootstrap/lib/Checkbox';
import Radio from '../../../node_modules/react-bootstrap/lib/Radio';
import DropdownButton from '../../../node_modules/react-bootstrap/lib/DropdownButton';
import InputGroup from '../../../node_modules/react-bootstrap/lib/InputGroup';
import MenuItem from '../../../node_modules/react-bootstrap/lib/MenuItem';
import FormGroup from '../../../node_modules/react-bootstrap/lib/FormGroup';
import ControlLabel from '../../../node_modules/react-bootstrap/lib/ControlLabel';
import FormControl from '../../../node_modules/react-bootstrap/lib/FormControl';
import Panel from '../../../node_modules/react-bootstrap/lib/Panel';


const jwt = require("jsonwebtoken");
const storageRef = storage.ref("users/");
var file;
var decode;


export class VolSignUp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      emergencyContact:'',
          relationship:'',
          emergencyPhone:'',
          spouse:'true/false??',
          friend:'true/false??',
          parent:'true/false??',
          guardian:'true/false??',
          other:'true/false??',
          d25:'true/false??',
          d50:'true/false??',
          d100:'true/false??',
          anyDistance:'true/false??',
          any:'true/false??',
          jan:'true/false??',
          feb:'true/false??',
          mar:'true/false??',
          apr:'true/false??',
          may:'true/false??',
          jun:'true/false??',
          jul:'true/false??',
          aug:'true/false??',
          sep:'true/false??',
          oct:'true/false??',
          nov:'true/false??',
          dec:'true/false??',
          backH:'true/false??',
          boat:'true/false??',
          saw:'true/false??',
          roapR:'true/false??',
          truckPmp:'true/false??',
          highW:'true/false??',
          med:'true/false??',
          backH:'true/false??',
          vet:'true/false??',                        
          ert:'true/false??', 
          nurse:'true/false??',
          doc:'true/false??',
          vetr:'true/false??',
          vetT:'true/false??',
          train:'true/false??',
          drive:'true/false??',
          month:'true/false??',
          quar:'true/false??',
          confirmEmail:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    if (event.target.files){
      file = event.target.files[0];
      this.setState({imageName:file.name});
    }
    this.setState({
      [name]: value
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();

    const formPayload = {
          emergencyContact: this.state.emergencyContact,
          relationship: this.state.relationship,
          emergencyPhone: this.state.emergencyPhone,
          spouse: this.state.spouse,
          friend: this.state.friend,
          parent: this.state.parent,
          guardian: this.state.guardian,
          other: this.state.other,
          d25: this.state.d25,
          d50: this.state.d50,
          d100: this.state.d100,
          anyDistance: this.state.anyDistance,
          any: this.state.any,
          jan: this.state.jan,
          feb: this.state.feb,
          mar: this.state.mar,
          apr: this.state.apr,
          may: this.state.may,
          jun: this.state.jun,
          jul: this.state.jul,
          aug: this.state.aug,
          sep: this.state.sep,
          oct: this.state.oct,
          nov: this.state.nov,
          dec: this.state.dec,
          boat: this.state.boat,
          backH:  this.state.backH,
          roapR: this.state.roapR,
          truckPmp: this.state.truckPmp,
          highW: this.state.highW,
          med: this.state.med,
          vet: this.state.vet,                        
          ert: this.state.ert, 
          nurse: this.state.nurse,
          doc: this.state.doc,
          vetr: this.state.vetr,
          vetT: this.state.vetT,
          train: this.state.train,
          drive: this.state.drive,
          month: this.state.month,
          quar: this.state.quar,
          confirmEmail: this.state.confirmEmail,
    };



    //create post request with right data path
    console.log("Send this in a POST request:", formPayload);
    console.log(this.state);
    const { emergencyContact, relationship, emergencyPhone, spouse, friend, parent, guardian, other, d25, d50, d100, anyDistance, any, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, backH, boat, saw, roapR, truckPmp, highW, med, vet , ert , nurse, doc, vetr, vetT, train, drive, month, quar, confirmEmail} = this.state;
    axios
      .post("/signup", { emergencyContact, relationship, emergencyPhone, spouse, friend, parent, guardian, other, d25, d50, d100, anyDistance, any, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, backH, boat, saw, roapR, truckPmp, highW, med, vet , ert , nurse, doc, vetr, vetT, train, drive, month, quar, confirmEmail })
      .then(response =>{
        console.log(response);
        Auth.authenticateUser(response.data.token, response.data.user);

        jwt.verify(response.data.token, "a secret phrase!", (err, decoded) => {
          // the 401 code is for unauthorized status
          decode = decoded.sub;
          storageRef.child(decode + "/" + file.name).put(file).then((snapshot) => {
            console.log(snapshot.downloadURL);
            this.setState({imageUrl:snapshot.downloadURL});
            axios.put("/userImageUrl", {imageUrl: snapshot.downloadURL, id: decode}).catch(err => console.log(err));
          });
        });
      }).catch(err => console.log(err));
      setTimeout(()=> {
        this.context.router.history.replace("/");
      },2000);
      this.handleClearForm(event);
      this.props.closeModal();
  };
  handleClearForm(event) {
      event.preventDefault();
      this.setState({
          emergencyContact:'',
          relationship:'',
          emergencyPhone:'',
          spouse:'true/false??',
          friend:'true/false??',
          parent:'true/false??',
          guardian:'true/false??',
          other:'true/false??',
          d25:'true/false??',
          d50:'true/false??',
          d100:'true/false??',
          anyDistance:'true/false??',
          any:'true/false??',
          jan:'true/false??',
          feb:'true/false??',
          mar:'true/false??',
          apr:'true/false??',
          may:'true/false??',
          jun:'true/false??',
          jul:'true/false??',
          aug:'true/false??',
          sep:'true/false??',
          oct:'true/false??',
          nov:'true/false??',
          dec:'true/false??',
          backH:'true/false??',
          boat:'true/false??',
          saw:'true/false??',
          roapR:'true/false??',
          truckPmp:'true/false??',
          highW:'true/false??',
          med:'true/false??',
          backH:'true/false??',
          vet:'true/false??',                        
          ert:'true/false??', 
          nurse:'true/false??',
          doc:'true/false??',
          vetr:'true/false??',
          vetT:'true/false??',
          train:'true/false??',
          drive:'true/false??',
          month:'true/false??',
          quar:'true/false??',
          confirmEmail:''
      });
  };
  render(){
    return(
// <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
//   <Modal.Header closeButton>
//     <Modal.Title id="contained-modal-title-sm">Volunteering? Please Continue Here}</Modal.Title>
//       </Modal.Header>
//         <Modal.Body>
        <div>
          <form onSubmit={this.handleFormSubmit}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <SingleInput
              inputType={'text'}
              title={'Emergency Contact Name'}
              name={'emergencyContact'}
              controlFunc={this.handleInputChange}
              content={this.state.emergencyContact} />
              
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Emergency Contact Relationship</ControlLabel>
                <FormControl componentClass="select">
                  <option> Select Relationship</option>
                  <option value="spouse" name={'spouse'} controlFunc={this.handleInputChange} content={this.state.spouse}>Spouse</option>
                  <option value="friend" name={'friend'} controlFunc={this.handleInputChange} content={this.state.friend}>Friend</option>
                  <option value="parent" name={'parent'} controlFunc={this.handleInputChange} content={this.state.parent}>Parent</option>
                  <option value="guardian" name={'guardian'} controlFunc={this.handleInputChange} content={this.state.guardian}>Guardian</option>
                  <option value="other" name={'other'} controlFunc={this.handleInputChange} content={this.state.other}>Other</option>
                </FormControl>
              </FormGroup>              

            <SingleInput
              inputType={'text'}
              title={'Emergency Contact Phone Number'}
              name={'emergencyPhone'}
              controlFunc={this.handleInputChange}
              content={this.state.emergencyPhone} />
                       
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>Distance Willing To Travel</ControlLabel>
              <FormControl componentClass="select">
                <option>Select the Distance You're Willing to Travel</option>
                <option value="d25" name={'d25'} controlFunc={this.handleInputChange} content={this.state.d25}>Up to 25 Miles</option>
                <option value="d50" name={'d50'} controlFunc={this.handleInputChange} content={this.state.d50}>Up to 50 Miles</option>
                <option value="d100" name={'d100'} controlFunc={this.handleInputChange} content={this.state.d100}>Up to 100 Miles</option>
                <option value="anyDistance" name={'anyDistance'} controlFunc={this.handleInputChange} content={this.state.anyDistance}>Any Distance within the contiguous United States </option>
                <option value="any" name={'any'} controlFunc={this.handleInputChange} content={this.state.any}>Any</option>
              </FormControl>
            </FormGroup>
               
            <FormGroup>
              <h6><u>Select the Months you're available to volunteer.</u></h6>
              <Radio inline name={'jan'} controlFunc={this.handleInputChange} content={this.state.jan}>January</Radio>
              <Radio inline name={'feb'} controlFunc={this.handleInputChange} content={this.state.feb}>February</Radio>
              <Radio inline name={'mar'} controlFunc={this.handleInputChange} content={this.state.mar}>March</Radio>
              <Radio inline name={'apr'} controlFunc={this.handleInputChange} content={this.state.apr}>April</Radio>
              <Radio inline name={'may'} controlFunc={this.handleInputChange} content={this.state.may}>May</Radio>
              <Radio inline name={'jun'} controlFunc={this.handleInputChange} content={this.state.jun}>June</Radio>
              <Radio inline name={'jul'} controlFunc={this.handleInputChange} content={this.state.jul}>July</Radio>
              <Radio inline name={'aug'} controlFunc={this.handleInputChange} content={this.state.aug}>August</Radio>
              <Radio inline name={'sep'} controlFunc={this.handleInputChange} content={this.state.sep}>September</Radio>
              <Radio inline name={'oct'} controlFunc={this.handleInputChange} content={this.state.oct}>October</Radio>
              <Radio inline name={'nov'} controlFunc={this.handleInputChange} content={this.state.nov}>November</Radio>
              <Radio inline name={'dec'} controlFunc={this.handleInputChange} content={this.state.dec}>December</Radio>
            </FormGroup>

            <FormGroup>
              <h6><u>Select the Equipment that's availble to you.</u></h6>
              <Radio inline name={'boat'} controlFunc={this.handleInputChange} content={this.state.boat}>Boat</Radio>
              <Radio inline name={'backH'} controlFunc={this.handleInputChange} content={this.state.backH}>Backhoe</Radio>
              <Radio inline name={'saw'} controlFunc={this.handleInputChange} content={this.state.saw}>Chainsaw</Radio>
              <Radio inline name={'truckPmp'} controlFunc={this.handleInputChange} content={this.state.truckPmp}>Commercial Pumper Truck</Radio>
              <Radio inline name={'highW'} controlFunc={this.handleInputChange} content={this.state.highW}>High Water Vehicle</Radio>
              <Radio inline name={'med'} controlFunc={this.handleInputChange} content={this.state.med}>Medical Equipment/Supplies</Radio>
              <Radio inline name={'roapR'} controlFunc={this.handleInputChange} content={this.state.roapR}>Rope Rescue Equipment</Radio>       
            </FormGroup>

            <FormGroup>
              <h6><u>Select any special skills, vocational training, or disaster training you have.</u></h6>
              <Radio inline name={'train'} controlFunc={this.handleInputChange} content={this.state.train}>Animal Training/Behavior</Radio>
              <Radio inline name={'drive'} controlFunc={this.handleInputChange} content={this.state.drive}>Commercial Driver</Radio>
              <Radio inline name={'doc'} controlFunc={this.handleInputChange} content={this.state.doc}>Doctor</Radio>
              <Radio inline name={'ert'} controlFunc={this.handleInputChange} content={this.state.ert}>Emergency Response Training</Radio>
              <Radio inline name={'nurse'} controlFunc={this.handleInputChange} content={this.state.nurse}>Nurse</Radio>
              <Radio inline name={'vet'} controlFunc={this.handleInputChange} content={this.state.vet}>Veteran</Radio>       
              <Radio inline name={'vetr'} controlFunc={this.handleInputChange} content={this.state.vetr}>Veterinarian</Radio>
              <Radio inline name={'vetT'} controlFunc={this.handleInputChange} content={this.state.vetT}>Veterinarian Tech</Radio>
          </FormGroup>                            

          <FormGroup>
            <h5 class="center"><u>Notifications</u></h5>
            <p> Get regular notifications.</p>
            <Radio inline name={'month'} controlFunc={this.handleInputChange} content={this.state.month}>Monthly</Radio>
            <Radio inline name={'quar'} controlFunc={this.handleInputChange} content={this.state.quar}>Quarterly</Radio>
          </FormGroup>

          <SingleInput
            inputType={'email'}
            title={'Confirm Email Address'}
            name={'confirmEmail'}
            controlFunc={this.handleInputChange}
            content={this.state.confirmEmail} />
            <input
                  type="submit"
                  className="btn btn-primary float-right"
                  value="Submit"/>             
        </form>
      </div>
//    </Modal.Body>
//   <FormFoot />
// </Modal>
    );
  }
}

VolSignUp.contextTypes = {
  router: PropTypes.object.isRequired
};
