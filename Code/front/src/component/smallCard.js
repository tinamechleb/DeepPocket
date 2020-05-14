
import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBAlert, MDBCardText, MDBCol } from 'mdbreact';
import ChartForExpenses from './chartForExpenses';
import ChartForIncomes from './chartForIncomes';
import DropDownButton from './dropDownButton';
import "./smallCard.css";

class CardExample extends Component {
  state = {
    yourSavings: 0,
    youSpent: 0,
    yourIncome: 0,
    youHave: 0,
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/api/sum/incomes', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ yourIncome: data }); console.log(data);
      })
      .catch(err => {
        console.log(err);
      });;

    fetch('http://127.0.0.1:8000/api/sum/expenses', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ youSpent: data }); console.log(data);
      })
      .catch(err => {
        console.log(err);
      });;

    fetch('http://127.0.0.1:8000/api/sum/savinggoals', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ yourSavings: data }); console.log(data);
      })
      .catch(err => {
        console.log(err);
      });;
  }
  render() {
    return (
      <MDBCol >
        <MDBCard className='main' style={{ height: '80vh' }}>
          <MDBCardImage />
          <MDBCardBody>



            <MDBAlert color="primary" className='mainContainerOfSmallItems' >
              <div className='containerOfItems'>
                <div className='smallCardItem rightText' >You have:</div>
                <div className='smallCardItem value' >{this.state.yourIncome - this.state.youSpent}</div>
                <div className='smallCardItem dollarSign' >{this.props.currency}</div>
              </div>
            </MDBAlert>
            <MDBAlert color="danger" className='mainContainerOfSmallItems' >
              <div className='containerOfItems'>
                <div className='smallCardItem rightText' >You spent:</div>
                <div className='smallCardItem value' >{this.state.youSpent}</div>
                <div className='smallCardItem dollarSign' >{this.props.currency}</div>
              </div>
            </MDBAlert>
            <MDBAlert color="success" className='mainContainerOfSmallItems' >
              <div className='containerOfItems'>
                <div className='smallCardItem rightText' >Your savings:</div>
                <div className='smallCardItem value'  >{this.state.yourSavings}</div>
                <div className='smallCardItem dollarSign' >{this.props.currency}</div>
              </div>
            </MDBAlert>

            <div className="chartFlex" >
              <h4 style={{ color: '#004085', padding: '2%' }}>Expenses</h4>
              {/* <div style = {{height:'270px',backgroundColor:'yellow'}}>      */}
              <div id="pleasedonttouch">
                <ChartForExpenses />
              </div>
              {/* </div> */}


            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol >
    );
  }
}

export default CardExample;