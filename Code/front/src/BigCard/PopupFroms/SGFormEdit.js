import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class SGFormEdit extends React.Component {
    state = {
        title: this.props.title,
        description: this.props.description,
        amount: this.props.amount,
        total_amount: this.props.total_amount,
        interval: this.props.interval,
        end_date: this.props.end_date,
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = `http://127.0.0.1:8000/api/saving_goals/${this.props.id}`;
        const data = {
            title: this.state.title,
            description: this.state.description,
            amount: this.state.amount,
            total_amount: this.state.total_amount,
            interval: this.state.interval,
            end_date: this.state.end_date
        }
        if (this.state.amount < 0 || this.state.total_amount < 0) {
            alert("amounts cannot be negative");
        }
        else if (this.state.amount > this.state.total_amount) {
            alert("amount cannot be bigger than total amount");
        }
        else {
            if (this.state.amount === this.state.total_amount) {
                alert("Congrats! You achieved your goal!");
            }
            console.log(data);
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(error => console.error('Error: ', error))
                .then(response => {
                    if (response.error == "Unauthorized") {
                        alert("Du bist authotized nicht");
                    }
                    else if (response.success == false) {
                        alert("there is already a goal with this title");
                    }
                    else {
                        console.log("this worked yo!");
                        window.location.reload();
                    }
                });
        }
    }


    render() {
        console.log(this.state.interval)
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="h4 text-center py-4 title-of-add">Edit {this.props.title}</div>
                                    <div className="grey-text">
                                        <div className="title-n-amount">
                                            <MDBInput
                                                className="form-title"
                                                label="Title"
                                                name="title"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                required
                                                onChange={this.handleChange}
                                                value={this.state.title}
                                            />
                                            <MDBInput
                                                className="form-amount"
                                                label="Saved Amount"
                                                name="amount"
                                                group
                                                type="number"
                                                validate
                                                error="wrong"
                                                success="right"
                                                required
                                                onChange={this.handleChange}
                                                value={this.state.amount}
                                            />
                                        </div>
                                        <div className="desc-n-date-cat">
                                            <MDBInput
                                                className="form-description"
                                                label="Description"
                                                name="description"
                                                group
                                                type="textarea"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.handleChange}
                                                value={this.state.description}
                                            />
                                            <div className="form-date-n-cat">
                                                <MDBInput
                                                    className="form-amount"
                                                    label="Goal Amount"
                                                    name="total_amount"
                                                    group
                                                    type="number"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.total_amount}
                                                />
                                                <form>
                                                    <div>
                                                        <select name="interval" classname="drop-categ" id="pst" onChange={this.handleChange} value={this.state.interval}>
                                                            <option value="weekly" href="#">Weekly</option>
                                                            <option value="monthly" href="#">Monthly</option>
                                                        </select>
                                                        <img id="arrow" src={require(`../../images/arrow.png`)} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <MDBInput
                                            className="form-due-date"
                                            label="Due Date"
                                            name="end_date"
                                            group
                                            type="date"
                                            validate
                                            required
                                            onChange={this.handleChange}
                                            value={this.state.end_date}
                                        />

                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Edit
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        );
    }
}

export default SGFormEdit;