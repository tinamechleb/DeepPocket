import React from "react";
import "./report.css";
import Piechart from './reportPieChart';
import IncomesBarChart from './reportIncomesbarChart';
import ExpensesBarChart from './reportExpensesbarChart';
import Button from './dropdownButton';
import { BrowserRouter as Router } from "react-router-dom";




class reportpage extends React.Component {
  state = {
    typeOfChart: "bar"
  }

  componentDidMount() {

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
          typeOfChart: data[0].graph_type,
        });
      })
      .catch(err => {
        console.log(err);
      });





  }

  render() {

    return (
      <div className="onlyeditme">

        <div className='head'>  <Button /></div>

        <div className="reportcontainer">

          <div className='left' >
            <IncomesBarChart typeOfChart={this.state.typeOfChart} />
          </div>


          <div className='right' >
            <ExpensesBarChart typeOfChart={this.state.typeOfChart} />
          </div>
        </div>
      </div>
    );
  }
}

export default reportpage;