import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class ExpensesForm extends React.Component {

    state = {
        disabled: "disabled",
        enabled: "",
        className: "form-end-date",
        notclassName: "form-end-date show-me",
        title: "",
        description: "",
        amount: "",
        start_date: "",
        end_date: "",
        recurrence: "fixed",
        recurrence1: "recurring",
        categories_name: "No Category",
        categories_id: 0,
        categ_data: [],
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleChangeOfCateg = e => {
        let obj = JSON.parse(e.target.value);
        this.setState({
            categories_name: obj.name,
            categories_id: obj.id,
        });
    }

    handleChangeOfSwitch = () => {
        this.setState({
            disabled: this.state.enabled,
            enabled: this.state.disabled,
            className: this.state.notclassName,
            notclassName: this.state.className,
            recurrence: this.state.recurrence1,
            recurrence1: this.state.recurrence
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/api/transactions";
        const data = {
            title: this.state.title,
            description: this.state.description,
            amount: this.state.amount,
            start_date: this.state.start_date,
            recurrence: this.state.recurrence,
            end_date: this.state.end_date,
            categories_name: this.state.categories_name,
            categories_id: this.state.categories_id,
            type: "expense",
        }
        if (this.state.amount < 0) {
            alert("Amount cannot be negative");
        }
        else {
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
                        alert("there is already an income with this title");
                    }
                    else {
                        console.log("this worked yo!");
                        window.location.reload();
                    }
                });
        }
    }
    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/categories/expenses', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categ_data: data,
                });
                console.log(data);
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
                                    <div className="h4 text-center py-4 title-of-add">Add an Expense</div>
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
                                            />
                                            <MDBInput
                                                className="form-amount"
                                                label="Amount"
                                                name="amount"
                                                group
                                                type="number"
                                                validate
                                                error="wrong"
                                                success="right"
                                                required
                                                onChange={this.handleChange}
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
                                            />
                                            <div className="form-date-n-cat">
                                                <MDBInput
                                                    className="form-date"
                                                    name="start_date"
                                                    group
                                                    type="date"
                                                    validate
                                                    required
                                                    onChange={this.handleChange}
                                                />
                                                <form>
                                                    <div>
                                                        <select name="categories_name" classname="drop-categ" id="pst" onChange={this.handleChangeOfCateg}>

                                                            {
                                                                (this.state.categ_data == null || this.state.categ_data == 0) ?
                                                                    <></>
                                                                    :
                                                                    this.state.categ_data.map((element, index) => {
                                                                        return (<option value={JSON.stringify({ 'name': element.name, "id": element.id })} href="#">{element.name}</option>);
                                                                    })
                                                            }
                                                            <option value={JSON.stringify({ 'name': 'No Category', "id": '0' })} href="#">No Category</option>
                                                        </select>
                                                        <img id="arrow" src={require(`../../images/arrow.png`)} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='custom-control custom-switch recurring-switch'>
                                            <input
                                                type='checkbox'
                                                className='custom-control-input'
                                                id='customSwitches'
                                                readOnly
                                                onChange={this.handleChangeOfSwitch}
                                            />
                                            <label className='custom-control-label recurring-switch' htmlFor='customSwitches'>
                                                Recurring
                                            </label>
                                        </div>
                                        <MDBInput
                                            className={this.state.className}
                                            label="End Date"
                                            name="end_date"
                                            group
                                            type="date"
                                            validate
                                            disabled={this.state.disabled}
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Add
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
export default ExpensesForm;