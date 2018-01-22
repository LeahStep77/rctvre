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
import ControlLabel from '../../../node_modules/react-bootstrap/lib/ControlLabel';
import FormGroup from '../../../node_modules/react-bootstrap/lib/FormGroup';
import FormControl from '../../../node_modules/react-bootstrap/lib/FormControl';


const jwt = require("jsonwebtoken");
const storageRef = storage.ref("users/");
var file;
var decode;





export class SignUpForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      streetAddress:'',
      city:'',
      state:'',
      zip:'',
      phoneNumber:'',
      email: "",
      password:'',
      image:"",
      imageName:'',
      imageUrl:'',
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      streetAddress: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      image: this.state.image,
      imageName: this.state.imageName,
      imageUrl: this.state.imageUrl
    };     
    //create post request with right data path
    console.log("Send this in a POST request:", formPayload);
    console.log(this.state);
    const { firstName, lastname, dateOfBirth, streetAddress, city, state, zip, phoneNumber, email, password, image, imageName, imageUrl } = this.state;
    axios
      .post("/signup", { firstName, lastname, dateOfBirth, streetAddress, city, state, zip, phoneNumber, email, password, image, imageName, imageUrl })
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
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          streetAddress:'',
          city:'',
          state:'',
          zip:'',
          phoneNumber:'',
          email: "",
          password:'',
          image:"",
          imageName:'',
          imageUrl:'',
      });
  };
  render(){
    return(


      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-sm">Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <form onSubmit={this.handleFormSubmit}>


            <SingleInput
              inputType={'text'}
              title={'First Name'}
              name={'firstName'}
              controlFunc={this.handleInputChange}
              content={this.state.firstName} />
            <SingleInput
              inputType={'text'}
              title={'Last Name'}
              name={'lastName'}
              controlFunc={this.handleInputChange}
              content={this.state.lastName} />
            <SingleInput
              inputType={'date'}
              title={'Birthday'}
              name={'dateOfBirth'}
              controlFunc={this.handleInputChange}
              content={this.state.dateOfBirth} />
            <SingleInput
              inputType={'text'}
              title={'Street Address'}
              name={'streetAddress'}
              controlFunc={this.handleInputChange}
              content={this.state.streetAddress} />
            <SingleInput
              inputType={'text'}
              title={'City'}
              name={'city'}
              controlFunc={this.handleInputChange}
              content={this.state.city} />
            <FormGroup controlId="state">
              <ControlLabel>state</ControlLabel>
              <FormControl componentClass="select">
                <option> Select Your State</option>
                <option value="Alabama" name= {'Alabama'} controlFunc={this.handleInputChange} content={this.state.Alabama}>Alabama</option>
                <option value="Alaska" name= {'Alaska'} controlFunc={this.handleInputChange} content={this.state.Alaska}>Alaska</option>
                <option value="Arizona" name= {'Arizona'} controlFunc={this.handleInputChange} content={this.state.Arizona}>Arizona</option>
                <option value="Arizona" name= {'Arizona'} controlFunc={this.handleInputChange} content={this.state.Arizona}>Arizona</option>
                <option value="Arkansas" name= {'Arkansas'} controlFunc={this.handleInputChange} content={this.state.Arkansas}>Arkansas</option>
                <option value="California" name= {'California'} controlFunc={this.handleInputChange} content={this.state.California}>California</option>
                <option value="Colorado" name= {'Colorado'} controlFunc={this.handleInputChange} content={this.state.Colorado}>Colorado</option>
                <option value="Connecticut" name= {'Connecticut'} controlFunc={this.handleInputChange} content={this.state.Connecticut}>Connecticut</option>
                <option value="Florida" name= {'Florida'} controlFunc={this.handleInputChange} content={this.state.Florida}>Florida</option>
                <option value="Georgia" name= {'Georgia'} controlFunc={this.handleInputChange} content={this.state.Georgia}>Georgia</option>
                <option value="Hawaii" name= {'Hawaii'} controlFunc={this.handleInputChange} content={this.state.Hawaii}>Hawaii</option>
                <option value="Idaho" name= {'Idaho'} controlFunc={this.handleInputChange} content={this.state.Idaho}>Idaho</option>
                <option value="Illinois" name= {'Illinois'} controlFunc={this.handleInputChange} content={this.state.Illinois}>Illinois</option>
                <option value="Indiana" name= {'Indiana'} controlFunc={this.handleInputChange} content={this.state.Indiana}>Indiana</option>
                <option value="Iowa" name= {'Iowa'} controlFunc={this.handleInputChange} content={this.state.Iowa}>Iowa</option>
                <option value="Kansas" name= {'Kansas'} controlFunc={this.handleInputChange} content={this.state.Kansas}>Kansas</option>
                <option value="Kentucky" name= {'Kentucky'} controlFunc={this.handleInputChange} content={this.state.Kentucky}>Kentucky</option>
                <option value="Louisiana" name= {'Louisiana'} controlFunc={this.handleInputChange} content={this.state.Louisiana}>Louisiana</option>
                <option value="Maine" name= {'Maine'} controlFunc={this.handleInputChange} content={this.state.Maine}>Maine</option>
                <option value="Maryland" name= {'Maryland'} controlFunc={this.handleInputChange} content={this.state.Maryland}>Maryland</option>
                <option value="Massachusetts" name= {'Massachusetts'} controlFunc={this.handleInputChange} content={this.state.Massachusetts}>Massachusetts</option>
                <option value="Michigan" name= {'Michigan'} controlFunc={this.handleInputChange} content={this.state.Michigan}>Michigan</option>
                <option value="Minnesota" name= {'Minnesota'} controlFunc={this.handleInputChange} content={this.state.Minnesota}>Minnesota</option>
                <option value="Mississippi" name= {'Mississippi'} controlFunc={this.handleInputChange} content={this.state.Mississippi}>Mississippi</option>
                <option value="Missouri" name= {'Missouri'} controlFunc={this.handleInputChange} content={this.state.Missouri}>Missouri</option>
                <option value="Montana" name= {'Montana'} controlFunc={this.handleInputChange} content={this.state.Montana}>Montana</option>
                <option value="Nebraska" name= {'Nebraska'} controlFunc={this.handleInputChange} content={this.state.Nebraska}>Nebraska</option>
                <option value="Nevada" name= {'Nevada'} controlFunc={this.handleInputChange} content={this.state.Nevada}>Nevada</option>
                <option value="NewHampshire" name= {'NewHampshire'} controlFunc={this.handleInputChange} content={this.state.NewHampshire}>New Hampshire</option>
                <option value="NewJersey" name= {'NewJersey'} controlFunc={this.handleInputChange} content={this.state.NewJersey}>New Jersey</option>
                <option value="NewMexico" name= {'NewMexico'} controlFunc={this.handleInputChange} content={this.state.NewMexico}>New Mexico</option>
                <option value="NewYork" name= {'NewYork'} controlFunc={this.handleInputChange} content={this.state.NewYork}>New York</option>
                <option value="NorthCarolina" name= {'NorthCarolina'} controlFunc={this.handleInputChange} content={this.state.NorthCarolina}>North Carolina</option>
                <option value="NorthDakota" name= {'NorthDakota'} controlFunc={this.handleInputChange} content={this.state.NorthDakota}>North Dakota</option>
                <option value="Ohio" name= {'Ohio'} controlFunc={this.handleInputChange} content={this.state.Ohio}>Ohio</option>
                <option value="Oklahoma" name= {'Oklahoma'} controlFunc={this.handleInputChange} content={this.state.Oklahoma}>Oklahoma</option>
                <option value="Oregon" name= {'Oregon'} controlFunc={this.handleInputChange} content={this.state.Oregon}>Oregon</option>
                <option value="Pennsylvania" name= {'Pennsylvania'} controlFunc={this.handleInputChange} content={this.state.Pennsylvania}>Pennsylvania</option>
                <option value="RhodeIsland" name= {'RhodeIsland'} controlFunc={this.handleInputChange} content={this.state.RhodeIsland}>Rhode Island</option>
                <option value="SouthCarolina" name= {'SouthCarolina'} controlFunc={this.handleInputChange} content={this.state.SouthCarolina}>South Carolina</option>
                <option value="SouthDakota" name= {'SouthDakota'} controlFunc={this.handleInputChange} content={this.state.SouthDakota}>South Dakota</option>
                <option value="Tennessee" name= {'Tennessee'} controlFunc={this.handleInputChange} content={this.state.Tennessee}>Tennessee</option>
                <option value="Texas" name= {'Texas'} controlFunc={this.handleInputChange} content={this.state.Texas}>Texas</option>
                <option value="Utah" name= {'Utah'} controlFunc={this.handleInputChange} content={this.state.Utah}>Utah</option>
                <option value="Vermont" name= {'Vermont'} controlFunc={this.handleInputChange} content={this.state.Vermont}>Vermont</option>
                <option value="Virginia" name= {'Virginia'} controlFunc={this.handleInputChange} content={this.state.Virginia}>Virginia</option>
                <option value="Washington" name= {'Washington'} controlFunc={this.handleInputChange} content={this.state.Washington}>Washington</option>
                <option value="WestVirginia" name= {'WestVirginia'} controlFunc={this.handleInputChange} content={this.state.WestVirginia}>West Virginia</option>
                <option value="Wisconsin" name= {'Wisconsin'} controlFunc={this.handleInputChange} content={this.state.Wisconsin}>Wisconsin</option>
                <option value="Wyoming" name= {'Wyoming'} controlFunc={this.handleInputChange} content={this.state.Wyoming}>Wyoming</option>      
              </FormControl>
            </FormGroup>   
            <SingleInput
              inputType={'number'}
              title={'Zip Code'}
              name={'zip'}
              controlFunc={this.handleInputChange}
              content={this.state.zip} />            
            <SingleInput
              inputType={'text'}
              title={'Phone Number'}
              name={'phoneNumber'}
              controlFunc={this.handleInputChange}
              content={this.state.phoneNumber} />
            <SingleInput
              inputType={'email'}
              title={'Email'}
              name={'email'}
              controlFunc={this.handleInputChange}
              content={this.state.email} />
            <SingleInput
              inputType={'password'}
              title={'Password (must be at least 8 characters in length)'}
              name={'password'}
              controlFunc={this.handleInputChange}
              content={this.state.password} />
            <FileInput
                type={'file'}
                title={'Upload Image'}
                name={'image'}
                value={this.state.image}
                controlFunc={this.handleInputChange} />
            <input
                  type="submit"
                  className="btn btn-primary float-right"
                  value="Submit"/>          
                  </form>
        </Modal.Body>
        
      </Modal>

    );

  }
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};