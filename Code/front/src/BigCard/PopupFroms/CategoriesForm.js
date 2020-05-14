import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class CategoriesForm extends React.Component {
    state = {
        name: "",
        color: "",
        type: "incomes",
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/api/categories";
        const data = {
            name: this.state.name,
            color: this.state.color,
            type: this.state.type,
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
                    alert("there is already a category with this title || color");
                }
                else {
                    console.log("this worked yo!");
                    window.location.reload();
                }
            });
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="h4 text-center py-4 title-of-add">Add a Category</div>
                                    <div className="grey-text categ-form">
                                        <MDBInput
                                            className="categ-title"
                                            label="Title"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="name"
                                            required
                                            onChange={this.handleChange}
                                        />
                                        <MDBInput
                                            className="categ-color"
                                            label="color"
                                            group
                                            type="color"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="color"
                                            required
                                            onChange={this.handleChange}
                                        />
                                        <div className="hiiii">
                                            <select name="type" classname="cat-type" id="pst" onChange={this.handleChange}>
                                                <option value="incomes" href="#">Incomes</option>
                                                <option value="expenses" href="#">Expenses</option>
                                            </select>
                                            <img id="arrow" src={require(`../../images/arrow.png`)} />
                                        </div>

                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Add Category
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

export default CategoriesForm;