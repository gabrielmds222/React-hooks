import React, { useState,useEffect, useRef } from 'react';

export function Ref(){
    const [name, setName] = useState('');

    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    })

    return(
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Hello, myname is {name}!!</p>
            <p>Renders: {renders.current}</p>
        </div>
    );
}