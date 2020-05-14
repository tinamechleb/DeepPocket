import React, { Component } from "react";
import './Navbar.css';
// import SideSettingNav from '../sideSettingNav/sideSettingNav';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBAnimation, MDBCard, MDBCardImage, MDBIcon
} from "mdbreact";


class Navbar extends Component {
  state = {
    isOpen: false
  };
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:3000/signin/verify?token=${localStorage.getItem('token')}`);
    const result = await response;
    console.log(result);
    if (result.url.length > 60) {
      this.setState({
        loggedIn: true
      })
    }
  }
  handleLogout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavLink to="/"><img id="logooo" src={require(`../../images/whitewallet.png`)} /></MDBNavLink>
          <MDBNavbarBrand>
            <strong className="white-text"><MDBNavLink to="/" className="white-text">Deep Pocket</MDBNavLink></strong>
          </MDBNavbarBrand>


          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              {
                this.state.loggedIn ? (
                  <>
                    <MDBNavItem>
                      <MDBNavLink to="/cards">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/report">Full Report</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/settings">Settings</MDBNavLink>
                    </MDBNavItem>
                  </>
                ) : <>

                  </>
              }
              <MDBNavItem>

                {/* <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {/* <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">

                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!" >
                  <MDBIcon fab icon="facebook" />
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="instagram" />
                </MDBNavLink>
              </MDBNavItem> */}

              {
                this.state.loggedIn ? (
                  <>
                    <MDBNavItem>
                      <MDBNavLink className="waves-effect waves-light" onClick={() => this.handleLogout()} to="/cards">Sign out</MDBNavLink>
                    </MDBNavItem>
                  </>
                ) : <>
                    <MDBNavItem>
                      <MDBNavLink className="waves-effect waves-light" to="/cards">Sign in</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="waves-effect waves-light" to="/signup">Sign up</MDBNavLink>
                    </MDBNavItem>
                  </>
              }


            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>


      </div>
    );
  }
}

export default Navbar;