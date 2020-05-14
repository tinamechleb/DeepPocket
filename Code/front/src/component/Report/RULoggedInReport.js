import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Setting from '../sideSettingNav/settingpage';
import Signin from '../signin';
import reportpage from './report';
import Loading from '../../images/Rolling-1s-200px.gif';

class RULoggedInReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }
    async componentDidMount() {
        const response = await fetch(`http://localhost:3000/signin/verify?token=${localStorage.getItem('token')}`);
        const result = await response;
        console.log(result);
        if (result.url.length > 60) {
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.loggedIn ? (
                        <Route path='/report' component={reportpage} />
                    ) : <Route path="/report" component={Signin} />
                }
            </>
        );

    }

}

export default RULoggedInReport;
