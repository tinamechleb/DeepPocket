import React, { Component } from "react";
import '../Income/IncomeCard/IncomeCard.css';
import PopupForm from '../PopupFroms/PopupForm';
import GSFormEdit from '../PopupFroms/SGFormEdit';
import AddSavForm from '../PopupFroms/AddSavForm';
import { Accordion } from 'semantic-ui-react';


class GrandSGCard extends Component {

    state = {
        activeIndex: 0,
        showPopup: false,
        showAddPopup: false,
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    toggleAddPopup() {
        this.setState({
            showAddPopup: !this.state.showAddPopup,
        });
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex });
    }

    handleAddSav = (e, titleProps) => {

    }

    handleDelete = () => {
        fetch(`http://127.0.0.1:8000/api/saving_goals/${this.props.id}`, {
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

        let className = 'SG-Card';

        const { activeIndex } = this.state


        if (activeIndex === 1) {
            className += ' Active-Title';
        }

        return (

            <div>
                <div id="accordion-basic" className="saving-acc">
                    <Accordion fluid styled>
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <div className="SG-Grid">
                                <div className={className}>
                                    <div className="SG-Title">{this.props.title}</div>
                                    <div className="inlineFlex">
                                        <div className="SG-saved">{this.props.amount} {this.props.currency}</div>
                                        <div> / </div>
                                        <div className="SG-total">{this.props.total_amount} {this.props.currency}</div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <div className="surprise sg-surprise">
                                <div className="description sg-description">{this.props.description}</div>

                                <div className="inlineFlexSpaceBetween">
                                    <div className="SG-wORm">{this.props.interval}/</div>
                                    <div className="SG-DueDate">{this.props.end_date}</div>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                    <div onClick={this.toggleAddPopup.bind(this)} className="Image AddSav sav" />
                    <div onClick={this.togglePopup.bind(this)} className="Image Edit sav editSav" />
                    <div onClick={this.handleDelete} className="Image Delete sav" />
                    {this.state.showPopup ?
                        <div className='popup'>
                            <div className='popup_inner'>
                                <GSFormEdit id={this.props.id} title={this.props.title} amount={this.props.amount} total_amount={this.props.total_amount} description={this.props.description} interval={this.props.interval} end_date={this.props.end_date}
                                />
                                <button onClick={this.togglePopup.bind(this)} className="Cancel-Button">x</button>
                            </div>
                        </div>

                        : null
                    }
                    {this.state.showAddPopup ?
                        <div className='popup'>
                            <div className='popup_inner'>
                                <AddSavForm id={this.props.id} title={this.props.title} amount={this.props.amount} total_amount={this.props.total_amount} description={this.props.description} interval={this.props.interval} end_date={this.props.end_date}
                                />
                                <button onClick={this.toggleAddPopup.bind(this)} className="Cancel-Button">x</button>
                            </div>
                        </div>

                        : null
                    }
                </div>
            </div>
        )
    }
}

export default GrandSGCard;
