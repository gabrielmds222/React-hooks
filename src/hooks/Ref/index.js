import React, { useState,useEffect, useRef } from 'react';

export function Ref(){
    const [name, setName] = useState('');

    const previousName = useRef('');
    useEffect(() => {
        previousName.current = name;
    }, [name]);

    // Exemplo 1:
    // const renders = useRef(0);
    
    // useEffect(() => {
        //     renders.current = renders.current + 1;
        // });


    // Exemplo 2:
    // const inputRef = useRef();

    // function focusInput(){
    //     inputRef.current.focus();
    // }
    return(
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Hello, myname is {name}!!</p>
            <p>And myname was {previousName.current}</p>
        </div>
    );
}