import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class AddSavForm extends React.Component {
    state = {
        addedAmount: "",
    };
    handleChange = event => {
        this.setState({ addedAmount: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = `http://127.0.0.1:8000/api/saving_goals/${this.props.id}`;
        const newAmount = parseFloat(this.props.amount) + parseFloat(this.state.addedAmount);
        const data = {
            title: this.props.title,
            description: this.props.description,
            amount: newAmount,
            total_amount: this.props.total_amount,
            interval: this.props.interval,
            end_date: this.props.end_date
        }
        if (this.state.addedAmount < 0) {
            alert("amount cannot be negative");
        }
        else if (data.amount > data.total_amount) {
            alert("amount cannot be bigger than the total amount");
        }
        else {
            if (data.amount === data.total_amount) {
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
                        alert("Du bist authotizen nicht");
                    }
                    else if (response.success == false) {
                        alert("couldn't add amount");
                    }
                    else {
                        console.log("this worked yo!");
                        window.location.reload();
                    }
                });
        }
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="h4 text-center py-4 title-of-add">Add amount to {this.props.title}</div>
                                    <div className="grey-text categ-form">
                                        <MDBInput
                                            className="categ-title"
                                            label="Amount"
                                            group
                                            type="number"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="addedAmount"
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Add Amount
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

export default AddSavForm;