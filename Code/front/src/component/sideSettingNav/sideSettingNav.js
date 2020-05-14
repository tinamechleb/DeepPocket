import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBBtn,MDBDropdownItem,MDBDropdownMenu,MDBDropdown,MDBDropdownToggle, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}



render() {
  return (
    <Router>
      <MDBContainer style={{width:'22%' ,position:'absolute'}} >
        <MDBNavbar color="green lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer>
           
            <MDBNavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse13')}>
              <span className="white-text">
                <MDBIcon icon="bars" />
              </span>
            </MDBNavbarToggler>
            <MDBNavbarBrand>
              <h3>Setting</h3>
            </MDBNavbarBrand>
            <MDBCollapse id="navbarCollapse13" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
              
<from>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Type of Chart View </div>
                  </MDBDropdownToggle><br/>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Pie chart</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Bar Chart</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>


                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Default Chart View </div>
                  </MDBDropdownToggle><br/>
                  
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Weekly</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Month</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Yearly</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>


            
                <MDBNavItem>
                  <div>Change your UserName</div>
                  <input   placeholder="Enter New UserName"></input><br/><br/>
                </MDBNavItem>

                <MDBNavItem>
                  <div>Change your  Password</div>
                  <input  placeholder="Enter New Password"></input><br/><br/>
                </MDBNavItem>
                
                <MDBNavItem>
                  <div >Change your  Password</div>
                  <input placeholder="Enter New Email"></input><br/><br/>
                </MDBNavItem>

                <MDBBtn color="default">Save</MDBBtn>
</from>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default NavbarPage;



