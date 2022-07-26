import React, { useState } from 'react';

export function Memo(){
    const [number, setNumber] = useState(1);
    const [text, setText] = useState('');

    const slowFuntion = (num) => {
        console.log('função foi chamada');
        for(let i = 0; i <= 10000; i++){}
        return num * 2;
    }

    const doubleNumber = slowFuntion(number);

    return(
        <>
            <p>{number}</p>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setNumber(2)}>Increment</button>
            <p>text: {text}</p>
        </>
    );
}