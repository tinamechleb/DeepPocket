import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./charts.css";

class ChartsPage extends React.Component {
  state = {
    dataPie: {
      labels: ["Red", "Green", "Yellow", ],
      datasets: [
        {
          data: [300, 50, 100,],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            // "#949FB1",
            // "#4D5360",
            // "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            // "#A8B3C5",
            // "#616774",
            // "#DA92DB"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer style={{ width: "20rem"}} >
        <h3 className="mt-3">Incomes</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;