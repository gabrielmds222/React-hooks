import React, { useState, useReducer } from 'react';

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {
//                 counter: state.counter + 1,
//         };
//         case 'decrement':
//             return {
//                 counter: state.counter - 1,
//             };
//         default:
//             return state;
//     }
// }

const reducer = (state, action) => {
    switch(action.type) {
        case 'add-task':
            return {
                tasks: [
                    ...state.tasks,
                    { name: action.payload, isCompleted: false },
                ],
            };
        default:
            return state;
    }
}

export function Reducer(){
    const [state, dispatch] = useReducer(reducer, { tasks: [] });
    const [inputValue, setInputValue] = useState('');

    return(
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => dispatch({ type: 'add-task', payload: inputValue })}>Adicionar</button>

            {state.tasks.map((task) => (
                <h1>{task.name}</h1>
            ))}
        </div>
    );
}