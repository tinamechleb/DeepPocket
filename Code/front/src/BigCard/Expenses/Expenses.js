import React from 'react';
import FixedExpenses from './FixedExpenses';
import RecurringExpenses from './RecurringExpenses';

class Expenses extends React.Component {
    render() {
        return (
            <>
                <div className="Income">
                    <div>
                        <h3 style={{ margin: '4%' }}>Fixed expenses</h3>
                        <FixedExpenses currency={this.props.currency} />
                    </div>
                    <div className="vl"></div>
                    <div>
                        <h3 style={{ margin: '4%' }}>Recurring expenses</h3>
                        <RecurringExpenses currency={this.props.currency} />
                    </div>
                </div>

            </>
        );
    }
}

export default Expenses;
