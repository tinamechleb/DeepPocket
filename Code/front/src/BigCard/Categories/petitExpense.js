import React, { Component } from "react";


class PetitExpense extends Component {

    render() {
        return (
            <>
                <div className="category-subs">
                    <p className="Income-Title petit-Title">Total expenses</p>
                    <p className="Income-amount petit-Amount">{this.props.amount} {this.props.currency}</p>
                </div>
                <div className="category-subs">
                    <p className="Income-Title petit-Title">Color</p>
                    <p className="Income-amount petit-Amount">{this.props.color}</p>
                </div>
            </>
        );
    }
}

export default PetitExpense;