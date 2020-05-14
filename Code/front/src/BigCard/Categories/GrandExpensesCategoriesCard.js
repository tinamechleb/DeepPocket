import React, { Component } from "react";
import { Accordion } from 'semantic-ui-react';
import './Categories.css';
import PetitExpense from './petitExpense';
import CategoriesFormEdit from '../PopupFroms/CategoriesFormEdit';


class GrandExpensesCategoriesCard extends Component {

    state = {
        sum: "",
        activeIndex: 0,
        showPopup: false,
        data: "",
        bloop: "",
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
        if (this.state.sum > 0) {
            alert("category cannot be deleted because it has data inside it");
        }
        if (this.state.sum == 0) {
            fetch(`http://127.0.0.1:8000/api/categories/${this.props.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    console.log(this.props.id);
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/categories/expenses/', {
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
            }).then(() => {
                fetch(`http://127.0.0.1:8000/api/sum/categories/expense/${this.props.id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                        'Accept': `application/json`
                    }
                })
                    .then(response => response.text())
                    .catch(exception => {
                        console.log(exception);
                    })
                    .then(data => {
                        this.setState({ sum: data });
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });


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
                                <div className="Income-Title CAT-Title">{this.props.name}</div>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <div className="surprise petit-surprise">
                                <PetitExpense color={this.props.color} id={this.props.id} amount={this.state.sum} currency={this.props.currency} />
                            </div>
                        </Accordion.Content>
                    </Accordion>
                    <div className="Image Edit" onClick={this.togglePopup.bind(this)} />
                    <div className="Image Delete" onClick={this.handleDelete} />
                    {this.state.showPopup ?
                        <div className='popup'>
                            <div className='popup_inner'>
                                <CategoriesFormEdit id={this.props.id} name={this.props.name} color={this.props.color} type={this.props.type}
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

export default GrandExpensesCategoriesCard;
