import React from "react";
import "./report.css";
import Piechart from './reportPieChart';
import BarChart from './reportIncomesbarChart';

import { BrowserRouter as Router } from "react-router-dom";




class reportpage extends React.Component {
   

    
      render() {
       
    return (
        <div className="reportcontainer">
      


    <div className = 'oneOf2squares' >
            <div className = 'barChart oneOfmainFourDivs'>  
                <BarChart/>
            </div>
            <div className = 'rightofbarchart oneOfmainFourDivs'>
              <div className = 'item'  ></div>
              <div className = 'iitem' ></div>
              <div className = 'item'  ></div>
              <div className = 'iitem' ></div>
              <div className = 'item'  ></div>
              <div className = 'iitem' ></div>


            </div>
    </div>
        
    <div className = 'oneOf2squares' >
            <div className = 'leftofpiechart oneOfmainFourDivs'>
              <div className = 'item'  ></div>
              <div className = 'iitem' ></div>
              <div className = 'item'  ></div>
              <div className = 'iitem' ></div>
              <div className = 'item'  ></div>
              <div className = 'iitem' ></div>
                


            </div>
            <div className = 'lineChart oneOfmainFourDivs'>
            <Piechart/>

            </div>
    </div>



</div>
    );
  }
}

export default reportpage;