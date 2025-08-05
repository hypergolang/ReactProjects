import { useState } from 'react';
import './App.css';
import groceryCartImg from './assets/grocery-cart.png';

// {
//     name: "Banana",
//     quantity: 1,
//     completed: true
// }

function App() {
    const [inputValue, setInputValue] = useState('');
    const [groceryItems, setGroceryItems] = useState([]);

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddGroceryItem = (e) => {
        if (e.key === 'Enter') {
            if (inputValue) {
                setGroceryItems([
                    ...groceryItems,
                    {
                        quantity: 1,
                        name: inputValue,
                        completed: false,
                    },
                ]);
                setInputValue("")
            }
        }
    };

    return (
        <main className='App'>
            <div>
                <h4 className='success'>You're done</h4>
                { JSON.stringify(groceryItems) }
                <div className='header'>
                    <button
                        onClick={ () => {
                            setInputValue('');
                        } }
                    >
                        Clear input
                    </button>
                    <h1>Shopping List</h1>
                    <img
                        src={ groceryCartImg }
                        alt=''
                    />
                    <input
                        type='text'
                        placeholder='Add an item'
                        className='item-input'
                        onChange={ handleChangeInputValue }
                        onKeyDown={ handleAddGroceryItem }
                        value={ inputValue }
                    />
                </div>
                <ul>
                    <li>
                        <div className='container'>
                            <input
                                type='checkbox'
                                name=''
                                id=''
                            />
                            <p>Carrots</p>
                        </div>
                        <div>
                            <button className='remove-button'>X</button>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default App;
