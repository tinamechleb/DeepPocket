import React from "react";
import "./signup.css";
import Footer from './footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from './signin';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";

class ClassicFormPage extends React.Component {
  state = {
    collapseID: "",
    name: "",
    email: "",
    password: "",
    token: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/api/register";
    const data = { name: this.state.name, email: this.state.email, password: this.state.password }
    console.log(data);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(response => {
        if (response != undefined) {
          this.setState({ token: response.access_token });
          localStorage.setItem("token", this.state.token);
          window.location.reload();
        }
        else {
          alert("This email already exists!");
        }
      });
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">


        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient"
            style={{ backgroundImage: "url(" + require('../images/IMG9.jpeg') + ")" }}
          >
            <MDBContainer  >
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    At Deep Pocket, we believe that everyone deserves the chance to
                    manage their finances wisely, save more money,
                    and achieve their goals and dreams easily.
                  </h6>
                  <form>
                    <h6>Already have an account?</h6>
                    <MDBBtn type="submit" formaction="/cards" outline color="white">
                      Sign in
                  </MDBBtn>
                  </form>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card"
                      style={{ backgroundColor: '#2bbbad', opecity: 50 }}
                    >
                      <form onSubmit={this.handleSubmit}>
                        <MDBCardBody className="white-text">
                          <h3 className="text-center">
                            <MDBIcon icon="user" /> Register:
                        </h3>
                          <hr className="hr-light" />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your name"
                            name="name"
                            onChange={this.handleChange}
                            // icon="user"
                            required
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            // icon="envelope"
                            required
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your password"
                            name="password"
                            // icon="lock"
                            type="password"
                            onChange={this.handleChange}
                            required
                          />
                          <div className="text-center mt-4 black-text">
                            <MDBBtn color="indigo" type="submit">Sign Up</MDBBtn>
                            <hr className="hr-light" />
                            <div className="text-center d-flex justify-content-center white-label">
                              <a href="#!" className="p-2 m-2">
                                <MDBIcon
                                  fab
                                  icon="twitter"
                                  className="white-text"
                                />
                              </a>
                              <a href="#!" className="p-2 m-2">
                                <MDBIcon
                                  fab
                                  icon="linkedin"
                                  className="white-text"
                                />
                              </a>
                              <a href="#!" className="p-2 m-2">
                                <MDBIcon
                                  fab
                                  icon="instagram"
                                  className="white-text"
                                />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </form>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </div>
    );
  }
}

export default ClassicFormPage;