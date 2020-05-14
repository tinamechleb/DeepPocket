import React from "react";
import "./dropdownButton.css";

class DropdownPage extends React.Component {


  render() {
  return (
  
    <div>
    <select name="type" id="dropB"  >
      <option  value="weekly">Monthly</option>
      <option  value="monthly">Yearly</option>
   
    </select>
    <img id="arrow" src="/static/media/arrow.2012c1a9.png"></img>
  </div>
  );
}}

export default DropdownPage;








