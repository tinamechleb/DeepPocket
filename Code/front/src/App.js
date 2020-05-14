import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideSettingNav from './component/sideSettingNav/sideSettingNav';
import Navbar from "./component/Navbar/Navbar";
import Signin from "./component/signin";
import Homepage from "./component/Homepage";
import Footer from "./component/footer";
import Piechart from "./component/pieChart";
import BarChart from "./component/barChart";
import Signup from "./component/signup";
import Setting from './component/sideSettingNav/settingpage'
import Cards from './component/cardsContainer/cards';
import IsYouLoggedIn from './component/cardsContainer/IsYouLoggedIn';
import IsYouRegistered from './component/cardsContainer/isYouRegistered';
import IsULoggedInSettings from './component/sideSettingNav/isULoggedInSettings';
import RULoggedInReport from './component/Report/RULoggedInReport';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reportpage from './component/Report/report';
class App extends Component {
  componentDidMount() {
    document.title = "Deep Pocket";
  }

  render() {
    return (


      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Homepage} />
          <Route path="/signup" component={IsYouRegistered} />
          <Route path="/settings" component={IsULoggedInSettings} />
          <Route path="/cards" component={IsYouLoggedIn} />
          <Route path="/report" component={RULoggedInReport} />

          <Switch />

        </div>

      </Router>


    );
  }
}

export default App;
