import {useState} from 'react';
import CurrencyInput from 'react-currency-input-field';
import TotalIncome from './TotalIncome';
import '../styles/Income.css';


const AddIncome = ({items, setItems}) => {
    const [inputValue, setInputValue] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue || !description) {
            alert ('Please fill in both fields');
            return;
         }
            
             const formattedValue = new Intl.NumberFormat('en-US', {
                 style: 'currency',
                 currency: 'USD',
             }).format(parseFloat(inputValue));
 
             setItems ([...items, {amount: formattedValue, description}]);
             setInputValue('');
             setDescription('');
 
     };
    



    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };


    return (
        <div className = "income-container">
            <div className = "income-box">
                <h3> Income: </h3>
                <ul>
                    {items.map((item, index) =>(
                        <li key={index}> {item.amount} {item.description}
                            <button
                                onClick={() => handleDelete(index)}
                                className = "delete-button"
                            >
                            Delete
                            </button>
                        </li>
                    )
                    )}
                    
                </ul>
            </div>
            <TotalIncome items={items} />

            {/* Add Expense Form */}
                        <form onSubmit={handleSubmit} className = "form-container">
                            <CurrencyInput
                                    id="input-example"
                                    name="input-name"
                                    placeholder="Enter amount"
                                    value = {inputValue}
                                    decimalsLimit={2}
                                    prefix = "$"
                                    onValueChange = {(value) => setInputValue(value)}
                            />
                            {/* description input */}
                            <input
                                type = "text"
                                placeholder = "Enter Description"
                                value = {description}
                                onChange = {(e) => setDescription(e.target.value)} 
                            />
                                    <button type = "submit"> Add Expense </button>
                        </form>

        </div>
    );
}

export default AddIncome;