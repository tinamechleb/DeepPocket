import React from "react";
// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    // <form >
    //   <div>
    //     <select name="" classname="drop-categ" id="pstt"  style = {{color:'white',backgroundColor:'#2BBBAD'}}>
    //       <option value="weekly" href="#"  style = {{color:'white',backgroundColor:'#2BBBAD'}}>WEEKLY</option>
    //       <option value="monthly" href="#" style = {{color:'white',backgroundColor:'#2BBBAD'}}>MONTHLY</option>
    //     </select>
    //   </div>
    // </form>



    
    <form>
    <select  >
      <option  value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
   
    </select>
    
  </form>
  );
}

export default DropdownPage;