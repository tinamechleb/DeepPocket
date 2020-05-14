import React from "react";
import { Bar } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
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
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  componentDidMount() {
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
    if (this.props.typeOfChart == "pie") {
      return (
        <div>
          <h4> Expenses Chart</h4>
          <Pie data={this.state.dataPie} />
        </div>
      );
    }
    else if (this.props.typeOfChart == "bar") {
      return (
        <div>
          <h4> Expenses Chart</h4>
          <Bar data={this.state.dataPie} options={this.state.barChartOptions} />
        </div>
      );
    }
    else if (this.props.typeOfChart == "horizontalbar") {
      return (
        <div>
          <h4> Expenses Chart</h4>
          <HorizontalBar data={this.state.dataPie} options={this.state.barChartOptions} />
        </div>
      );
    }
    else if (this.props.typeOfChart == "donut") {
      return (
        <div>
          <h4> Expenses Chart</h4>
          <Doughnut data={this.state.dataPie} />
        </div>
      );
    }
    else {
      return (
        <div>
          <h4> Expenses Chart</h4>
          <Bar data={this.state.dataPie} options={this.state.barChartOptions} />
        </div>);
    }
  }
}

export default ChartsPage;