import React from 'react';
import IncomeCategories from './IncomeCategories';
import ExpensesCategories from './ExpensesCategories';

class Categories extends React.Component {
    render() {
        return (
            <div className="Income" >
                <div>
                    <h3 style={{ margin: '4%' }}>Incomes</h3>
                    <IncomeCategories currency={this.props.currency} />
                </div>
                <div className="vl"></div>
                <div>
                    <h3 style={{ margin: '4%' }}>Expenses</h3>
                    <ExpensesCategories currency={this.props.currency} />
                </div>
            </div>

        );
    }
}

export default Categories;
