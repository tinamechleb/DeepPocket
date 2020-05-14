import React from "react";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./charts.css";

class ChartsPage extends React.Component {
  state = {
    typeOfChart: "bar",
    id: "",
    sum: "",
    arrayofsum: [],
    arrayofname: [],
    arrayofcolor: [],
    data: "",
    dataPie: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: []
        }
      ]
    }
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
          typeOfChart: stuff[0].graph_type,
        });
        console.log(this.state.stuff);
      })
      .catch(err => {
        console.log(err);
      });



    fetch('http://127.0.0.1:8000/api/categories/expenses', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
        });
        // console.log(data);
        if (this.state.data == null || this.state.data == 0) { }
        else {
          this.state.data.map((element, index) => {
            return fetch(`http://127.0.0.1:8000/api/sum/categories/expense/${element.id}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': `application/json`
              }
            })
              .then(response => response.json())
              .then(data => {
                this.setState({
                  arrayofsum: [...this.state.arrayofsum, data + ""]
                });
                this.setState({
                  arrayofname: [...this.state.arrayofname, element.name],
                  arrayofcolor: [...this.state.arrayofcolor, element.color],
                });
              })
              .then(() => {

                this.setState({
                  dataPie: {
                    labels: this.state.arrayofname,
                    datasets: [
                      {
                        data: this.state.arrayofsum,
                        backgroundColor: this.state.arrayofcolor,
                        hoverBackgroundColor: this.state.arrayofcolor
                      }
                    ]
                  }
                });
              })
              .catch(err => {
                console.log(err);
              });
          })
        }
      })
      .catch(err => {
        console.log(err);
      }
      );

  }

  render() {
    if (this.props.pieorbar == "pie") {
      return <Pie data={this.state.dataPie} options={{ responsive: true }} />
    }
    else if (this.state.typeOfChart == "bar") {
      return <Bar data={this.state.dataPie} options={{ responsive: true }} />
    }
    else if (this.state.typeOfChart == "donut") {
      return <Doughnut data={this.state.dataPie} options={{ responsive: true }} />
    }
    else if (this.state.typeOfChart == "horizontalbar") {
      return <HorizontalBar data={this.state.dataPie} options={{ responsive: true }} />
    }
    else {
      return (
        <Bar data={this.state.dataPie} options={{ responsive: true }} />
      );
    }

  }

}




export default ChartsPage;