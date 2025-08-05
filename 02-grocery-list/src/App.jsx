import { useState } from 'react';
import './App.css';
import groceryCartImg from './assets/grocery-cart.png';

function App() {
    const [inputValue, setInputValue] = useState("")

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <main className='App'>
            <div>
                <h4 className='success'>You're done</h4>
                <div className='header'>
                    <button onClick={ () => {
                        setInputValue("")
                    } }>Clear input</button>
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
