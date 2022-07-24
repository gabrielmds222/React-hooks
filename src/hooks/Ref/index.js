import React, { useState,useEffect, useRef } from 'react';

export function Ref(){
    const [name, setName] = useState('');

    const inputRef = useRef();

    function focusInput(){
        inputRef.current.focus();
    }

    // const renders = useRef(0);

    // useEffect(() => {
    //     renders.current = renders.current + 1;
    // });

    return(
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Hello, myname is {name}!!</p>
            <button onCLick={focusInput}>Focus input</button>
        </div>
    );
}