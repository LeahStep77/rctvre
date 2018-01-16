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
            <input
                  type="submit"
                  className="btn btn-primary float-right"
                  value="Submit"/>
           </Navbar.Brand>
         </Navbar.Header>
           <Nav pullRight className='formFoot'> 
                
                 <a className="navbar-brand navBrand" href="/VolSignUp">
                Volunteering? Please Continue Here
                </a>

               </Nav>}
       </Navbar>
)
   }
 };
 export default FormFoot;