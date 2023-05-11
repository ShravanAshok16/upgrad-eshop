import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import styles from './signup.css';
import LockIcon from '@material-ui/icons/Lock'

class Signup extends Component {
 constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      password: "",
      repeatPassword: ""
    };
  }
     onChange = e => {
       this.setState({ [e.target.name]: e.target.value });
     };

     onSignupClick = () => {
       const userData = {
         username: this.state.firstName,
         password: this.state.password,
         password: this.state.repeatPassword
       };
       console.log("Sign up " + userData.username + " " + userData.password);
     };

     render() {
       return (
        <div>

               <h1>Sign up</h1>
               <Form>
                 <Form.Group controlId="firstNameId">
                   <Form.Label>First Name</Form.Label>
                   <Form.Control
                     type="text"
                     name="firstName"
                     placeholder="First Name*"
                     value={this.state.firstName}
                     onChange={this.onChange}
                   />
                   <FormControl.Feedback type="invalid"></FormControl.Feedback>
                 </Form.Group>
                    <Form.Group controlId="lastNameId">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                     type="text"
                     name="lastName"
                     placeholder="Last Name*"
                     value={this.state.lastName}
                     onChange={this.onChange}
                   />
                   </Form.Group>
                      <Form.Group controlId="emailId">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                       type="email"
                       name="emailAddress"
                       placeholder="Email Address*"
                       value={this.state.lastName}
                       onChange={this.onChange}
                       />
                   <FormControl.Feedback type="invalid"></FormControl.Feedback>
                 </Form.Group>
                 <Form.Group controlId="newPasswordId">
                   <Form.Label>Password</Form.Label>
                   <Form.Control
                     type="password"
                     name="password"
                     placeholder="Password*"
                     value={this.password}
                     onChange={this.onChange}
                   />
                   <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group controlId="repeatPasswordId">
                    <Form.Label>Confirm Password</Form.Label>
                     <Form.Control
                      type="password"
                      name="repeatPassword"
                      placeholder="Confirm Password*"
                      value={this.password}
                      onChange={this.onChange}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                 </Form.Group>
                    <Form.Group controlId="contactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                     type="tel"
                     name="contactNo"
                      placeholder="Contact Number*"
                      value={this.state.lastName}
                      onChange={this.onChange}
                      />
                   <FormControl.Feedback type="invalid"></FormControl.Feedback>
                 </Form.Group>
               </Form>
               <Button color="primary" onClick={this.onSignupClick}>Sign up</Button>
               <p className="mt-2">
                 <Link to="/login">Already have account? Login</Link>
               </p>
        </div>
       );
     }
   }
   export default Signup;