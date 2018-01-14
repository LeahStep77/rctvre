import React, {Component} from 'react';
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import {SignUpForm, LoginForm, CreateEventForm} from  "../Form";
import { LinkContainer } from 'react-router-bootstrap';
import LogoutButton from '../LogoutButton';
import Auth from "../../modules/Auth";



export class FormFoot extends Component {
   constructor(props){
     super(props);
     this.state={
       VolInfoShow:false,
       loginShow:false,
       eventShow:false

      //  createEventShow:false

     };
     this.volInfoOpen=this.volInfoOpen.bind(this);
     this.volInfoClose=this.volInfoClose.bind(this);


    //  this.createEventOpen=this.createEventOpen.bind(this);
    //  this.createEventClose=this.createEventClose.bind(this);

   }


   volInfoClose() {
     this.setState({VolInfoShow:false});
   }
   volInfoOpen(){
     this.setState({VolInfoShow:true});
   }
   


   render(){
     return (
        <Navbar fixedBottom inverse>
         <Navbar.Header>
           <Navbar.Brand>
             <a className="navbar-brand navBrand" href="/">
               VRE
             </a>
           </Navbar.Brand>
         </Navbar.Header>
         
           <Nav pullRight className='formFoot'>                 
                 <NavItem eventKey={4} onClick={this.volInfoOpen} className="navbarItem">
                   Volunteering? Please Continue Here
                 </NavItem>
               </Nav>}
           
           

         <SignUpForm show={this.state.VolInfoShow} onHide={this.volInfoClose} closeModal={this.volInfoClose} />
         
       </Navbar>
     
)
   }
 };
 export default FormFoot;