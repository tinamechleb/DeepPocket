import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from './cards'
import Signin from '../signin';
import Loading from '../../images/Rolling-1s-200px.gif';

class IsYouLoggedIn extends Component {
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
                        <Route path='/cards' component={Cards} />
                    ) : <Route path="/cards" component={Signin} />
                }
            </>
        );

    }

}

export default IsYouLoggedIn;
