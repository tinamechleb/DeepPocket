import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from './cards'
import Signup from '../signup';

class IsYouRegistered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            token: ""
        };
    }
    async componentDidMount() {
        const response = await fetch(`http://localhost:3000/signup/verify?token=${localStorage.getItem('token')}`);
        const result = await response;
        console.log(result);
        if (result.url.length > 60) {
            this.setState({
                registered: true
            });
        }
    }
    render() {
        return (
            <>
                {
                    this.state.registered ? (
                        <Route path='/signup' component={Cards} />
                    ) : <Route path="/signup" component={Signup} />
                }
            </>
        );
    }

}

export default IsYouRegistered;
