import React from "react";
import "./settingPage.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Cards from '../cardsContainer/cards';
import ChartForExpenses from '../chartForExpenses';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBDropdownMenu,
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBDropdownItem,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
  MDBLink
} from "mdbreact";

class ClassicFormPage extends React.Component {
  state = {
    collapseID: "",
    pieorbar: "bar",
    wmy: "monthly",
    data: "",
    username: "",
    email: "",
    currency: "$",
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://127.0.0.1:8000/api/usersettings`;
    const data = {
      name: this.state.username,
      email: this.state.email,
      graph_type: this.state.pieorbar,
      currency: this.state.currency,
    }
    console.log(data);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(response => {
        if (response.error == "Unauthorized") {
          alert("Du bist authotized nicht");
        }
        else if (response.success == false) {
          alert("there is already a goal with this title");
        }
        else {
          console.log("this worked yo!");
          alert("Settings changed successfully!");
          // window.location.reload();
        }
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/api/usersettings', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          username: data[0].name,
          email: data[0].email,
          pieorbar: data[0].graph_type,
          currency: data[0].currency,
        });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage" >
        <Router>
          <div>

            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView          >
          <MDBMask className="d-flex justify-content-center align-items-center gradient"
            style={{
              backgroundImage: "url(" + require('../../images/IMG11.jpeg') + ")",
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat',
            }}
          >
            <MDBContainer  >
              <MDBRow >


                <MDBCol md="6" xl="8" className="mb-4"  >
                  <MDBAnimation type="fadeInRight" delay=".3s" style={{ opecity: 100 }}>
                    <MDBCard id="classic-card"
                      style={{
                        backgroundColor: '#2bbbad', borderRadius: '5%'

                      }}
                    >
                      <form onSubmit={this.handleSubmit}>
                        <MDBCardBody className="white-text">
                          <h3 className="text-center">
                            <MDBIcon icon="bars" /> Settings
                        </h3>
                          <hr className="hr-light" />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Edit Your Name"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                          />

                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Edit Your Email Address"
                            // icon="lock"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                          {/* <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Edit Your   password"
                          // icon="lock"
                          type="password"

                                        /> */}

                          <div class='custom-checkbox'><h4>Choose default style of the chart report</h4></div>
                          <div className="hiiiii">
                            <select name="pieorbar" classname="pieorbarddm" id="pstt" onChange={this.handleChange} value={this.state.pieorbar}>
                              <option value="bar" href="#">Bar</option>
                              <option value="horizontalbar" href="#">Horizontal Bar</option>
                              <option value="pie" href="#">Pie</option>
                              <option value="donut" href="#">Donut</option>
                            </select>
                            <img id="chevron" src={require(`../../images/chevron.png`)} />
                          </div>
                          {/* <div class="custom-control custom-checkbox">
                            <input type="radio" class="custom-control-input" id="defaultChecked2" value="pie" name="pieorbar" onClick={this.handleClick} checked={this.state.checked}></input>
                            <label class="custom-control-label" for="defaultChecked2">pie chart</label>
                          </div>
                          <div class="custom-control custom-checkbox" >
                            <input type="radio" class="custom-control-input" id="defaultChecked3" value="bar" name="pieorbar" onClick={this.handleClick} checked={this.state.unchecked}></input>
                            <label class="custom-control-label" for="defaultChecked3" >Bar chart</label>
                          </div>
                          <hr className="hr-light" /> */}

                          <br />

                          <div className='custom-checkbox' ><h4>Choose a currency </h4></div>
                          <div className="hiiiii">
                            <select name="currency" classname="pieorbarddm" id="pstt" onChange={this.handleChange} value={this.state.currency}>
                              <option value="$" href="#">$  USD</option>
                              <option value="LBP" href="#">LBP </option>
                              <option value="€" href="#">€ Euro</option>
                            </select>
                            <img id="chevron3" src={require(`../../images/chevron.png`)} />
                          </div>



                          <div className="text-center mt-4 black-text">

                            <MDBBtn color="indigo" type="submit">Save </MDBBtn>
                            {/* <hr className="hr-light" /> */}
                            <div className="text-center d-flex justify-content-center white-label">

                            </div>
                          </div>
                        </MDBCardBody>
                      </form>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>


                {/* 

                <MDBCol md="6" xl="4" className="mb-4"
                  style={{
                    backgroundImage: "url(" + require('../../images/profile.webp') + ")",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'noRepeat',
                    borderRadius: '5%'
                  }}
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s" style={{ opecity: 50 }} >
                    <MDBLink style={{ width: '20%' }}>
                      <h3>    <MDBIcon icon='edit' /></h3>
                    </MDBLink>



                  </MDBAnimation>
                </MDBCol> */}

              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

      </div >
    );
  }
}

export default ClassicFormPage;