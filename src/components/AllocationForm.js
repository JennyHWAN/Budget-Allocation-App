import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const AllocationForm = (props) => {
    const { dispatch,remaining, currency  } = useContext(AppContext);

    const [name, setName] = useState('Choose...');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (name === 'Choose...') {alert("careful, you haven't choose the Department value!");}
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds " + currency + remaining);
            setCost("");
            return;
        }

        // if (e.target.value === null) {alert("value empty");};

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
            setCost("");
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
                setCost("");
            }
    };

    // to handle the input value without changing any state
    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setCost(e.target.value);
        }
        else {alert("please input number only");}
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                  </select>

                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                </select>
                
                  <span style={{marginLeft:'2rem', marginRight:'0.5rem', fontSize:'150%', fontFamily:'serif'}}>{currency}</span>
                        <input 
                        // className='input-group-prepend'
                        required='required'
                        // type='number'
                        // pattern='[0-9]*'
                        id='cost'
                        value={cost}
                        // size={10}
                        style={{size: 10}}
                        // onChange={(event) => setCost(event.target.value)}>
                        onChange={handleChange}>
                        </input>
                
                    <div>
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;
