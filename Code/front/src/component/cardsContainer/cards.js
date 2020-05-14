import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BigCard from '../../BigCard/BigCard';
import SmallCard from '../smallCard';
import Loading from '../../images/Rolling-1s-200px.gif';
import {

  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './cards.css';
class AppPage extends React.Component {
  state = {
    currency: "$",
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
      .then(stuff => {
        this.setState({
          currency: stuff[0].currency,
        });
        console.log(this.state.stuff);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id='apppage  makeTowCardsFlex' style={{ display: 'flex' }}>

        <div className='widthOfBigCard'><BigCard style={{ width: '70%' }} currency={this.state.currency} /></div>
        <div className='widthOfSmallCard'><SmallCard currency={this.state.currency} /></div>

      </div>
    );
  }
}

export default AppPage;