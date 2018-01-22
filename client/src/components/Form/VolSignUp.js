import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { SingleInput } from "./SingleInput";
import "./Form.css";
import Auth from "../../modules/Auth";
import { FileInput } from "./FileInput";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';
import {storage} from '../../firebase/fire';
import Radio from '../../../node_modules/react-bootstrap/lib/Radio';
import FormGroup from '../../../node_modules/react-bootstrap/lib/FormGroup';
import ControlLabel from '../../../node_modules/react-bootstrap/lib/ControlLabel';
import FormControl from '../../../node_modules/react-bootstrap/lib/FormControl';



const jwt = require("jsonwebtoken");
const storageRef = storage.ref("users/");
var file;
var decode;


export class VolSignUp extends React.Component {
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
        emergencyContact:'',
        relationship:'',
        emergencyPhone:'',
        travelDistance:'',
        jan:'',
        feb:'',
        mar:'',
        apr:'',
        may:'',
        jun:'',
        jul:'',
        aug:'',
        sep:'',
        oct:'',
        nov:'',
        dec:'',
        boat:'',
        backH:'',
        saw:'',
        truckPmp:'',
        highW:'',
        med:'',
        roapR:'',
        fireCert:'',
        lawECert:'',
        emrMed:'',
        cdl:'',
        train:'',
        doc:'',
        ert:'', 
        nurse:'',
        vet:'', 
        vetr:'',
        vetT:'',
        url:'',
        language:'',
        otherLanguage:'',
        month:'',
        quar:'',
        email: "",
        password:'',
        image:"",
        imageName:'',
        imageUrl:'',     
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
          firstName: this.state.firstName,
          lastName:  this.state.lastName,
          dateOfBirth: this.state.dateOfBirth,
          streetAddress: this.state.streetAddress,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          phoneNumber: this.state.phoneNumber,
          emergencyContact: this.state.emergencyContact,
          relationship: this.state.relationship,
          emergencyPhone: this.state.emergencyPhone,
          travelDistance: this.state.travelDistance,
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
          backH: this.state.backH,
          saw: this.state.saw,
          truckPmp: this.state.truckPmp,
          highW: this.state.highW,
          med: this.state.med,
          roapR: this.state.roapR,
          fireCert: this.state.fireCert,
          lawECert: this.state.lawECert,
          emrMed: this.state.emrMed,
          cdl: this.state.cdl,
          train: this.state.train,
          doc: this.state.doc,
          ert: this.state.ert, 
          nurse: this.state.nurse,
          vet: this.state.vet, 
          vetr: this.state.vetr,
          vetT: this.state.vetT,
          url: this.state.url,
          language: this.state.language,
          otherLanguage: this.state.otherLanguage,
          month: this.state.month,
          quar: this.state.quar,
          email: this.state.email,
          password: this.state.password,
          image: this.state.image,
          imageName: this.state.imageName,
          imageUrl: this.state.imageUrl,     
          confirmEmail: this.state.confirmEmail

    };
    //create post request with right data path
    console.log("Send this in a POST request:", formPayload);
    console.log(this.state);
    const { firstName, lastName, streetAddress, city, state, zip, phoneNumber, emergencyContact, relationship, emergencyPhone, travelDistance, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, boat, backH, saw, truckPmp, highW, med, roapR, fireCert, lawECert, emrMed, cdl, train, doc, ert, nurse, vet, vetr, vetT, url, language, otherLanguage, month, quar, email, password, image, imageName, imageUrl, confirmEmail } = this.state;
    axios
      .post("/volSignUp", { firstName, lastName, streetAddress, city, state, zip, phoneNumber, emergencyContact, relationship, emergencyPhone, travelDistance, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, boat, backH, saw, truckPmp, highW, med, roapR, fireCert, lawECert, emrMed, cdl, train, doc, ert, nurse, vet, vetr, vetT, url, language, otherLanguage, month, quar, email, password, image, imageName, imageUrl, confirmEmail })
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
          emergencyContact:'',
          relationship:'',
          emergencyPhone:'',
          travelDistance:'',
          jan:'',
          feb:'',
          mar:'',
          apr:'',
          may:'',
          jun:'',
          jul:'',
          aug:'',
          sep:'',
          oct:'',
          nov:'',
          dec:'',
          boat:'',
          backH:'',
          saw:'',
          truckPmp:'',
          highW:'',
          med:'',
          roapR:'',
          fireCert:'',
          lawECert:'',
          emrMed:'',
          cdl:'',
          train:'',
          doc:'',
          ert:'', 
          nurse:'',
          vet:'', 
          vetr:'',
          vetT:'',
          url:'',
          language:'',
          otherLanguage:'',
          month:'',
          quar:'',
          email: "",
          password:'',
          image:"",
          imageName:'',
          imageUrl:'',     
          confirmEmail:''

      });
  };
  render(){
    return(

<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-sm">Volunteer Sign Up}</Modal.Title>
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
              inputType={'text'}
              title={'Emergency Contact Name'}
              name={'emergencyContact'}
              controlFunc={this.handleInputChange}
              content={this.state.emergencyContact} />
              
              <FormGroup controlId="relationship">
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
                       
            <FormGroup controlId="travelDistance">
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
              <h6><u>Select any certifications, special skills, vocational training, or disaster training you have.</u></h6>
              <Radio inline name={'fireCert'} controlFunc={this.handleInputChange} content={this.state.fireCert}>Fire Fighter Certification</Radio>

              <Radio inline name={'lawECert'} controlFunc={this.handleInputChange} content={this.state.lawECert}>Law Enforcement Certification</Radio>

              <Radio inline name={'emrMed'} controlFunc={this.handleInputChange} content={this.state.emrMed}>Emergency Medical Certification</Radio>

              <Radio inline name={'cdl'} controlFunc={this.handleInputChange} content={this.state.cdl}>Commercial Drivers License</Radio>

              <Radio inline name={'train'} controlFunc={this.handleInputChange} content={this.state.train}>Animal Training/Behavior</Radio>
            
              <Radio inline name={'doc'} controlFunc={this.handleInputChange} content={this.state.doc}>Doctor</Radio>
              <Radio inline name={'ert'} controlFunc={this.handleInputChange} content={this.state.ert}>Emergency Response Training</Radio>
              <Radio inline name={'nurse'} controlFunc={this.handleInputChange} content={this.state.nurse}>Nurse</Radio>
              <Radio inline name={'vet'} controlFunc={this.handleInputChange} content={this.state.vet}>Veteran</Radio>       
              <Radio inline name={'vetr'} controlFunc={this.handleInputChange} content={this.state.vetr}>Veterinarian</Radio>
              <Radio inline name={'vetT'} controlFunc={this.handleInputChange} content={this.state.vetT}>Veterinarian Tech</Radio>
          </FormGroup>      

           <SingleInput
              inputType={'text'}
              title={'Social Media URLs'}
              name={'url'}
              controlFunc={this.handleInputChange}
              content={this.state.url} />

              <SingleInput
              inputType={'text'}
              title={'State your primary language'}
              name={'language'}
              controlFunc={this.handleInputChange}
              content={this.state.language} />

              <SingleInput
              inputType={'text'}
              title={'Do you speak any other languages'}
              name={'otherLanguage'}
              controlFunc={this.handleInputChange}
              content={this.state.otherLanguage} />


          <FormGroup>
            <h5 class="center"><u>Notifications</u></h5>
            <p> Get regular notifications.</p>
            <Radio inline name={'month'} controlFunc={this.handleInputChange} content={this.state.month}>Monthly</Radio>
            <Radio inline name={'quar'} controlFunc={this.handleInputChange} content={this.state.quar}>Quarterly</Radio>
          </FormGroup>

          
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
    
    </Modal.Body>

 </Modal>
    );
  }
}

VolSignUp.contextTypes = {
  router: PropTypes.object.isRequired
};
