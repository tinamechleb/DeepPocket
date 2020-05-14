import React, { Component } from "react";
import './IncomeCard.css';
import IncomeFormEdit from '../../PopupFroms/IncomeFormEdit';
import { Accordion } from 'semantic-ui-react';


class GrandIncomeCard extends Component {

    state = {
        activeIndex: 0,
        showPopup: false
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex });
    }

    handleDelete = () => {
        fetch(`http://127.0.0.1:8000/api/transactions/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response)
            .then(data => {
                console.log(data);
                console.log(this.props.id);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });;

    }

    render() {

        let className = 'Income-Card';

        const { activeIndex } = this.state


        if (activeIndex === 1) {
            className += ' Active-Title';
        }

        return (

            <div>
                <div id="accordion-basic">
                    <Accordion fluid styled>
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <div className={className}>
                                <div className="Income-Title">{this.props.title}</div>
                                <div className="Income-amount">{this.props.amount} {this.props.currency}</div>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <div className="surprise">
                                <div className="description">{this.props.description}</div>
                                <div className="catndate">
                                    <div className="cat">{this.props.categories_name}</div>
                                    <div className="date-of-income">{this.props.end_date}</div>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                    <div className="Image Edit" onClick={this.togglePopup.bind(this)} />
                    <div className="Image Delete" onClick={this.handleDelete} />
                    {this.state.showPopup ?
                        <div className='popup'>
                            <div className='popup_inner'>
                                <IncomeFormEdit id={this.props.id} title={this.props.title} amount={this.props.amount} description={this.props.description} start_date={this.props.start_date} end_date={this.props.end_date} categories_id={this.props.categories_id} categories_name={this.props.categories_name} recurrence={this.props.recurrence} recurrence1={this.props.recurrence1} disabled={this.props.disabled} enabled={this.props.enabled} className={this.props.className} notclassName={this.props.notclassName} checked={this.props.checked} unchecked={this.state.unchecked}
                                />
                                <button onClick={this.togglePopup.bind(this)} className="Cancel-Button">x</button>
                            </div>
                        </div>

                        : null
                    }
                </div>
            </div>
        )
    }
}

export default GrandIncomeCard;
