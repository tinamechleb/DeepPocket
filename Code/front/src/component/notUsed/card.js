import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./card.css";
class Pills extends Component {
  state = {
    items: {
      default: "1",
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

render() {
  return (
      <MDBContainer className = "container">
        <MDBNav pills color="secondary">
          <MDBNavItem className= "marginLeftRight">
            <MDBNavLink
              to="#"
              active={this.state.items["default"] === "1"}
              onClick={this.togglePills("default", "1")}
            >
              Incomes
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem  className= "marginLeftRight">
            <MDBNavLink
              to="#"
              active={this.state.items["default"] === "2"}
              onClick={this.togglePills("default", "2")}
            >
              Expenses
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem  className= "marginLeftRight"> 
            <MDBNavLink
              to="#"
              active={this.state.items["default"] === "3"}
              onClick={this.togglePills("default", "3")}
            >
              Saving
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem  className= "marginLeftRight">
            <MDBNavLink
              to="#"
              active={this.state.items["default"] === "4"}
              onClick={this.togglePills("default", "4")}
            >
              Category
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>


        <MDBTabContent activeItem={this.state.items["default"]}>
          <MDBTabPane tabId="1">
            <p>
           1
            
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2">
            <p>
             2
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3">
           
            <p>
             3
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="4">
            <p>
            4
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default Pills;