import React, {useState} from "react";

function Counter() {
    const [count,setCount] = useState(0);

    function increment() {
        setCount(c=> c+1);
    }
    function decrement() {
        setCount(c=> c-1);
    }
    function reset() {
        setCount(0);
    }

    /* const increment= () => {
        setCount(count+1);
    }*/

    return(
        <div className="Counter"><b>Count: {count}</b> <br />
        <button className="counterbutton" onClick={decrement}>Decrement</button>
        <button className="counterbutton" onClick={reset}>Reset</button>
        <button className="counterbutton" onClick={increment}>Increment</button></div>
    );
}

export default Counter;