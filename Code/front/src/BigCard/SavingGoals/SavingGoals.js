import React, { Component } from 'react';
import './SavingGoals.css';
import GrandSGCard from './GrandSGCard';

class SavingGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/saving_goals', {
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
                <div className="Make-Me-Scroll give-me-margins" >
                    {this.state.data.map((element, index) => {
                        return (
                            <GrandSGCard title={element.title} amount={element.amount} total_amount={element.total_amount} description={element.description} interval={element.interval} end_date={element.end_date} id={element.id} currency={this.props.currency} />
                        );
                    })}
                </div>
            );
        }
    }
}

export default SavingGoals;
