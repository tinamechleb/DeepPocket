import React from "react";
import Footer from './footer';
import "./Homepage.css";
import { BrowserRouter as Router } from "react-router-dom";

import Piechart from '../component/pieChart';
import BarChart from '../component/barChart';


import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBCardImage,
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
    collapseID: ""
  };

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
          <MDBMask className="d-flex justify-content-center align-items-center gradient styleHomePageImg"
            style={{
              backgroundImage: "url(" + require('../images/IMG16.jpeg') + ")", height: '769px'

            }}
          >
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-8 mt-xl-5 mb-5">
                  {/* <div style={{height: 200}}></div> */}
                  <h1 className="h1-resposive font-weight-bold" style={{ color: "#ff0000" }}>
                    WELCOME TO DEEP POCKET
                  </h1>
                  <hr className="hr-light" />
                  <h3 className="mb-4 h3width" style={{ color: " #1a75ff" }}>
                    The App that's dedicated to make you smart about money,
                    help you save for your goals,
                    and manage your transactions meticulously.
                  </h3>
                  {/* <MDBBtn outline color="white">
                    More
                  </MDBBtn> */}
                </MDBAnimation>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p className="fontP">
                <h3 className="h3style" style={{ color: 'blue' }}>
                  Spend less.  Save more.
                </h3>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" xl="5" className="mb-4"  >
              <MDBAnimation type="fadeInRight" delay=".3s" >

                <img id="smallCardPreview" src={require(`../images/smallCardPreview.png`)} />

              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6" className="text-center">
              <p className="fontP margintops">
                See how much money you have, how much you spent, and how much you saved in a small summary, with a chart to help you visualize what your money was spent on.
              </p>
            </MDBCol>

            <MDBCol md="6" className="text-center">
              <p className="fontP margintops">
                View your incomes and expenses in customizable charts, based on categories.
              </p>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <img id="ReportsPagePreview" src={require(`../images/IncomesChartPreview.png`)} />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <img id="SettingsPreview" src={require(`../images/SettingsPreview.png`)} />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6" className="text-center">
              <p className="fontP margintop">
                Change your settings to your likings.<br /> Everything is customizable.
              </p>
            </MDBCol>

            <MDBCol md="6" className="text-center">
              <p className="fontP margintops">
                Creating saving goals and add money to your piggy bank over time to finally achieve your dreams.
              </p>
            </MDBCol>



            <MDBCol md="6" xl="5" className="mb-4">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <img id="AddASavingGoalPreview" src={require(`../images/Add.png`)} />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>


        </MDBContainer>
        <BarChart />
        <Footer />
      </div>
    );
  }
}

export default ClassicFormPage;