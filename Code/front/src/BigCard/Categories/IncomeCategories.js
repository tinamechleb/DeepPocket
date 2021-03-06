import React, { Component } from 'react';
import GrandIncomeCategoriesCard from './GrandIncomeCategoriesCard';

class IncomeCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/categories/incomes', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data }); console.log(data);
            });
    }
    render() {
        if (this.state.data == null || this.state.data == 0) {
            return <div></div>;
        }
        else {
            return (
                <div className="Make-Me-Scroll" >
                    {this.state.data.map((element, index) => {
                        return (
                            <GrandIncomeCategoriesCard name={element.name} color={element.color} id={element.id} amount="amount" type={element.type} currency={this.props.currency} />
                        );
                    })}
                </div>
            );
        }
    }
}

export default IncomeCategories;
