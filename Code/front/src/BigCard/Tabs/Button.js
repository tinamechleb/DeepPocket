import React from 'react';
import { Component } from 'react';
import PopupForm from '../PopupFroms/PopupForm';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        const {
            props: {
                activeTab
            },
        } = this;

        return (
            <>
                <button onClick={this.togglePopup.bind(this)} className="Add-Butt">+</button>

                {this.state.showPopup ?
                    <PopupForm
                        closePopup={this.togglePopup.bind(this)}
                        activeTab={activeTab}
                    />
                    : null
                }
            </>
        );
    }
}

export default Button;
