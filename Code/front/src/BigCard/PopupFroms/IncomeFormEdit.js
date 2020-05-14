import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class IncomeFormEdit extends React.Component {
    state = {
        disabled: this.props.disabled,
        enabled: this.props.enabled,
        className: this.props.className,
        notclassName: this.props.notclassName,
        title: this.props.title,
        description: this.props.description,
        amount: this.props.amount,
        start_date: this.props.start_date,
        end_date: this.props.end_date,
        recurrence: this.props.recurrence,
        recurrence1: this.props.recurrence1,
        categories_name: this.props.categories_name,
        categories_id: this.props.categories_id,
        categ_data: [],
        checked: this.props.checked,
        unchecked: this.props.unchecked,
        selected: "selected",
        notselected: "",
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
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
        if (this.state.disabled == "disabled") {
            this.setState({ checked: this.setState.unchecked, unchecked: this.setState.checked });
        }
        else if (this.state.disabled == "") {
            this.setState({ checked: this.setState.checked, unchecked: this.setState.unchecked, end_date: null });
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = `http://127.0.0.1:8000/api/transactions/${this.props.id}`;
        const data = {
            title: this.state.title,
            description: this.state.description,
            amount: this.state.amount,
            start_date: this.state.start_date,
            recurrence: this.state.recurrence,
            end_date: this.state.end_date,
            categories_name: this.state.categories_name,
            categories_id: this.state.categories_id,
            type: "income",
        }
        console.log(data);
        if (this.state.amount < 0) {
            alert("amount cannot be negative");
        }
        else {
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
                                                label="Amount"
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
                                                    className="form-date"
                                                    name="start_date"
                                                    group
                                                    type="date"
                                                    validate
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.start_date}
                                                />
                                                <form>
                                                    <div>
                                                        <select name="categories_name" classname="drop-categ" id="pst" onChange={this.handleChangeOfCateg}>
                                                            {
                                                                (this.state.categ_data == null || this.state.categ_data == 0) ?
                                                                    <></>
                                                                    :
                                                                    this.state.categ_data.map((element, index) => {
                                                                        for (let i = 0; i <= index; i++) {
                                                                            if (element.name === this.props.categories_name) {
                                                                                return (<option value={JSON.stringify({ 'name': element.name, "id": element.id })} href="#" selected="selected" >{element.name} </option>);
                                                                            }
                                                                        }
                                                                    })
                                                            }
                                                            {
                                                                (this.state.categ_data == null || this.state.categ_data == 0) ?
                                                                    <></>
                                                                    :
                                                                    this.state.categ_data.map((element, index) => {
                                                                        for (let i = 0; i <= index; i++) {
                                                                            if (element.name != this.props.categories_name) {
                                                                                return (<option value={JSON.stringify({ 'name': element.name, "id": element.id })} href="#" >{element.name} </option>);
                                                                            }
                                                                        }
                                                                    })
                                                            }
                                                            <option value={JSON.stringify({ 'name': 'No Category', "id": '0' })} href='#' selected={this.state.notselected}>No Category</option>
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
                                                checked={this.state.checked}
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

export default IncomeFormEdit;