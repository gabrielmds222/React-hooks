import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
        return {
            counter: state.counter + 1
        };
        default:
            return state;
    }
}

export function Reducer(){
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    // function Increment(){
    //     setCount(count + 1);
    // }

    return(
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => {}}>Decrement</button>
        </div>
    );
}