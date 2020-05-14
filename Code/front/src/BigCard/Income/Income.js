import React from 'react';
import FixedIncome from './IncomeCard/FixedIncome/FixedIncome';
import RecurringIncome from './IncomeCard/RecurringIncome/RecurringIncome';


class Income extends React.Component {
    render() {
        return (
            <>
                <div className="Income">
                    <div>
                        <h3 style={{ margin: '4%' }}>Fixed incomes</h3>
                        <FixedIncome currency={this.props.currency} />
                    </div>
                    <div className="vl"></div>
                    <div>
                        <h3 style={{ margin: '4%' }}>Recurring incomes</h3>
                        <RecurringIncome currency={this.props.currency} />
                    </div>
                </div>

            </>
        );
    }
}

export default Income;
