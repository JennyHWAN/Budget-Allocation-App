import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const [bud, setBud] = useState(budget);
    const totalExpense = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const submitEvent = (e) => {
        if (e.target.value <= 0) {alert("budget cannot less than 0");}
        else if (e.target.value < totalExpense) {alert("budget cannot less than total expense");}
        else {
            setBud(e.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: e.target.value,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{
                <input id='budget' type='number' max={20000} value={bud} step={10} onChange={submitEvent}>
                </input>}</span>
        </div>
    );
};
export default Budget;
