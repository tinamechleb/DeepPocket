import React from 'react';
import './Form.css';
import IncomeForm from './IncomeForm';
import ExpensesForm from './ExpensesForm';
import CategoriesForm from './CategoriesForm';
import SGForm from './SGForm';


class PopupForm extends React.Component {
    render() {
        const {
            props: {
                activeTab,
            },
        } = this;

        let fuck = <></>;
        let blah = activeTab;
        switch (blah) {
            case "Income":
                fuck = <IncomeForm />
                break;
            case "Expenses":
                fuck = <ExpensesForm />
                break;
            case "Categories":
                fuck = <CategoriesForm />
                break;
            case "Saving Goals":
                fuck = <SGForm />
                break;
        }

        return (
            <div className='popup'>
                <div className='popup_inner'>
                    {fuck}
                    <button onClick={this.props.closePopup} className="Cancel-Button">x</button>
                </div>
            </div>
        );
    }
}

export default PopupForm;
