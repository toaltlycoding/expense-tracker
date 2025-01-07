import { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import AddIncome from './components/AddIncome';
import TotalBalance from './components/TotalBalance';
import './App.css'

function App() {
  // state to track income and expenses
    const [incomeItems, setIncomeItems] = useState([]);
    const [expenseItems, setExpenseItems] = useState([]);
 //utility function calculates total
    const calculateTotal = (items) => {
        return items.reduce((sum, item) => {
            const numericValue = parseFloat(item.amount.replace(/[$,]/g, '')) || 0;
            return sum + numericValue;
        }, 0);
    };
 //calculates total
    const totalIncome = calculateTotal(incomeItems);
    const totalExpense = calculateTotal(expenseItems);

 return (
    <div className="app-container">
        <h1>Expense Tracker</h1>

        <AddTransaction items={expenseItems} setItems={setExpenseItems}/>
        <AddIncome items={incomeItems} setItems={setIncomeItems}/>

        <TotalBalance totalIncome={totalIncome} totalExpense={totalExpense} />
        
    </div>
 )
}

export default App
