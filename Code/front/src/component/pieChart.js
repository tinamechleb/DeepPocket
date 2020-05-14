import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
state = {
  dataDoughnut: {
    labels: ["Incomes", "Saving", "Expenses", "Car ", "Bills"],
    datasets: [
      {
        data: [100, 250, 100, 90, 60],
        backgroundColor: ["#F7464A", "#436BFBD",
         "#FDB45C", "#949FB1", "#4D5360"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      <h3 className="mt-5" style = {{color: 'rgb(7, 143, 255)'}}>Full Financial Report</h3>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default ChartsPage;