import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const calculateResult = () => {
    // Perform your calculation logic here
    // For example, if you're evaluating a mathematical expression:
    try {
      // eslint-disable-next-line
      const result = eval(value);
      console.log("Result:", result); // Debugging statement
      setValue(result);
    } catch (error) {
      console.error("Error:", error); // Debugging statement
      setValue('Error');
    }
  };
  
  return ( 
    <div className='container'>
    <div className='calculator'>
      <form action="">
        <div className='display'>
        <input type="text" defaultValue={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div>
            <input type="button" value="AC" onClick={e => setValue("")} />
            <input type="button" value="DE" onClick={() => setValue(String(value).slice(0, -1))}/>
            <input type="button" value="," onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={calculateResult}/>
        </div>
      </form>
    </div>
    </div>
  )
}
export default App;
