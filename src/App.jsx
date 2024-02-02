import React, {useState} from 'react';
import './App.css'
const App = () => {
    const [num,setNum]=useState('')
    const calculate= (item)=>{
        const value = item.target.textContent
        if (value === "=") {
            try {
                setNum(eval(num).toString());
            } catch (error) {
                setNum("Error");
            }
        }
        else if (value === 'C') {
            setNum('');
        }
        else{
            setNum((item)=>item+value)
        }
    }
    return (
        <div>
            <section className="calculator">
                <form>
                    <input type="text" value={num} className="screen"/>
                </form>

                <div className="buttons">
                    <button type="button" className="btn btn-yellow" onClick={calculate}>*</button>
                    <button type="button" className="btn btn-yellow" onClick={calculate}>/</button>
                    <button type="button" className="btn btn-yellow" onClick={calculate}>-</button>
                    <button type="button" className="btn btn-yellow" onClick={calculate}>+</button>

                    <button type="button" className="btn btn-gray" onClick={calculate}>9</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>8</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>7</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>6</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>5</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>4</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>3</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>2</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>1</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>0</button>
                    <button type="button" className="btn btn-gray" onClick={calculate}>.</button>

                    <button type="button" className="btn-equal" onClick={calculate}>=</button>
                    <button type="button" className="btn-clear" onClick={calculate}>C</button>
                </div>
            </section>
        </div>
    );
};

export default App;