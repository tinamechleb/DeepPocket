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
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default ChartsPage;






// import React from "react";
// import { Line } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";

// class ChartsPage extends React.Component {
//   state = {
//     dataLine: {
//       labels: ["January", "February", "March", "April", "May", "June", "July"],
//       datasets: [
//         {
//           label: "Incomes",
//           fill: true,
//           lineTension: 0.3,
//           backgroundColor: "rgba(225, 204,230, .3)",
//           borderColor: "rgb(205, 130, 158)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgb(205, 130,1 58)",
//           pointBackgroundColor: "rgb(255, 255, 255)",
//           pointBorderWidth: 10,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgb(0, 0, 0)",
//           pointHoverBorderColor: "rgba(220, 220, 220,1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//           label: "Expeses",
//           fill: true,
//           lineTension: 0.3,
//           backgroundColor: "rgba(184, 185, 210, .3)",
//           borderColor: "rgb(35, 26, 136)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgb(35, 26, 136)",
//           pointBackgroundColor: "rgb(255, 255, 255)",
//           pointBorderWidth: 10,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgb(0, 0, 0)",
//           pointHoverBorderColor: "rgba(220, 220, 220, 1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [28, 48, 40, 19, 66, 27, 80]
//         }
//       ]
//     }
//   };

//   render() {
//     return (
//       <MDBContainer>
//         <Line data={this.state.dataLine} options={{ responsive: true }} />
//       </MDBContainer>
//     );
//   }
// }

// export default ChartsPage;