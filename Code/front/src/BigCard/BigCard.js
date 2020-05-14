import React from 'react';
import Income from './Income/Income';
import Expenses from './Expenses/Expenses';
import Categories from './Categories/Categories';
import SavingGoals from './SavingGoals/SavingGoals';
import Tabs from './Tabs/Tabs';
import './BigCard.css';

class BigCard extends React.Component {
    render() {
        return (
            <div className="BigCard-Container" >
                <div className="BigCard">
                    <header className="Rest-Of-BigCard">
                        <Tabs>
                            <div label="Income">
                                <Income currency={this.props.currency} />
                            </div>
                            <div label="Expenses">
                                <Expenses currency={this.props.currency} />
                            </div>
                            <div label="Saving Goals" className="hideMyScroll">
                                <SavingGoals currency={this.props.currency} />
                            </div>
                            <div label="Categories">
                                <Categories currency={this.props.currency} />
                            </div>
                        </Tabs>
                    </header>
                </div>
            </div >
        );
    }
}

export default BigCard;
