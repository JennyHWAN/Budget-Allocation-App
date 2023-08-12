import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {FaPlusCircle} from 'react-icons/fa';
import {FaMinusCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        {/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td> */}
        {/* <td><BsPlusCircleFill onClick={e=>increaseAllocation(props.name)}></BsPlusCircleFill></td> */}
        <td><FaPlusCircle size='2em' color='green' onClick={e=>increaseAllocation(props.name)}></FaPlusCircle></td>
        {/* <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td> */}
        <td><FaMinusCircle size='2em' color='red' onClick={e=>decreaseAllocation(props.name)}></FaMinusCircle></td>
        {/* The e in codes above is required or it will cause crash on website */}
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
