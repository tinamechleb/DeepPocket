import React, { Component } from 'react';
import GrandIncomeCard from '../GrandIncomeCard';

class FixedIncome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/transactions/income/fixed', {
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
            })
            .catch(err => {
                console.log(err);
            });;
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
                            <GrandIncomeCard title={element.title} description={element.description} id={element.id} amount={element.amount} start_date={element.start_date} end_date={element.end_date} categories_id={element.categories_id} categories_name={element.categories_name} recurrence={element.recurrence} recurrence1="recurring" disabled="disabled" enabled="" className="form-end-date" notclassName="form-end-date show-me" checked="" unchecked="checked" currency={this.props.currency} />
                        );
                    })}
                </div>
            );
        }
    }
}

export default FixedIncome;
