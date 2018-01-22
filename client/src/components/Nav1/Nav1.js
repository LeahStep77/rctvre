import React, {Component} from 'react';
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import {SignUpForm, LoginForm, CreateEventForm, VolSignUp} from  "../Form";
import { LinkContainer } from 'react-router-bootstrap';
import LogoutButton from '../LogoutButton';
import Auth from "../../modules/Auth";
import Image from "../../../node_modules/react-bootstrap/lib/Image";
import "./Nav1.css";



export class Nav1 extends Component {
   constructor(props){
     super(props);
     this.state={
       signInShow:false,
       loginShow:false,
       volsignup:false,
       eventShow:false


       // createEventShow:false

     };
     this.signInOpen=this.signInOpen.bind(this);
     this.signInClose=this.signInClose.bind(this);
     this.loginOpen=this.loginOpen.bind(this);
     this.loginClose=this.loginClose.bind(this);
     this.volSignUpOpen=this.volSignUpOpen.bind(this);
     this.volSignUpClose=this.volSignUpClose.bind(this);

     this.eventClose=this.eventClose.bind(this);
     this.eventOpen=this.eventOpen.bind(this);

     // this.createEventOpen=this.createEventOpen.bind(this);
     // this.createEventClose=this.createEventClose.bind(this);

   }


   signInClose() {
     this.setState({signInShow:false});
   }
   signInOpen(){
     this.setState({signInShow:true});
   }
   loginClose() {
     this.setState({loginShow:false});
   }
   loginOpen(){
     this.setState({loginShow:true});
   }

   volSignUpClose(){
         this.setState({volSignUpShow:false});
       }
   volSignUpOpen() {
     this.setState({volSignUpShow:true});
   }
   

   eventClose() {
     this.setState({eventShow:false});
   }
   eventOpen(){
     this.setState({eventShow:true});
   }


   render(){
     return (
        <Navbar fixedTop collapseOnSelect inverse>
         <Navbar.Header className='image'>
         <a className="navbar-brand navBrand" href="/">VRE</a> 
           <Navbar.Brand>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <Nav>
               <NavItem eventKey={1} onClick={this.eventOpen} className="navbarItem">
                 Rescue Me
               </NavItem>
             </Nav>
             {Auth.isUserAuthenticated() ? <Nav>
                 <LinkContainer to="/logout" onClick={Auth.deauthenticateUser}>
                   <NavItem eventKey={5} className="navbarItem">
                     Log Out{" "}
                   </NavItem>
                 </LinkContainer>
               </Nav> : <Nav>
                 <NavItem eventKey={3} onClick={this.loginOpen} className="navbarItem">
                   Log In
                 </NavItem>
                 <NavItem eventKey={4} onClick={this.signInOpen} className="navbarItem">
                   Sign Up
                 </NavItem>
                 <NavItem eventKey={2} onClick={this.volSignUpOpen} className="navbarItem">
                   Volunteer Sign Up
                 </NavItem>
               </Nav>}
           </Nav>
         </Navbar.Collapse>

         <SignUpForm show={this.state.signInShow} onHide={this.signInClose} closeModal={this.signInClose} />
         <LoginForm show={this.state.loginShow} onHide={this.loginClose} closeModal={this.loginClose} />
         <VolSignUp show={this.state.volSignUpShow} onHide={this.volSignUpClose} closeModal={this.volSignUpClose} />

        <CreateEventForm show={this.state.eventShow} onHide={this.eventClose} closeModal={this.eventClose} />
       </Navbar>
     
)
   }
 };