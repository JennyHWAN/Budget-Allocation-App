import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import RemainingBudget from './components/Remaining'
import AllocationForm from './components/AllocationForm';
import Currencies from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}
                        {/* Budge component */}
                        <div className='col-sm'>
                            <Budget />
                        </div>

                        {/* Add Remaining component here under */}        
                        <div className='col-sm'>
                            <RemainingBudget />
                        </div>

                        {/* Add ExpenseTotal component here under */}        
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>

                        <div className='col-sm'>
                            <Currencies />
                        </div>
                    </div>
                    {/* Add ExpenseList component here under */}   
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'>
                        <div>
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        
            </div>
        </AppProvider>
    );
};
export default App;
