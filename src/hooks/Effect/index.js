import React, { useState, useEffect } from "react";

export function Effect(){
    const [items, setItems] = useState([]);
    const [resourceType, setResourceType] = useState("posts");

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }

    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${resourceType}`
                );
                const responseJSON = await response.json();

                setItems(responseJSON)
        }

        // fetchResourceTypes();
    }, [resourceType]);

    // ComponentDidMount
    useEffect(() => {
        console.log('ComponentDidMount');
    }, []); //Ao passar uma lista vazia, o useEffect só será executado uma vez;
    // ComponentWillUnmount

    return(
        <div>
            <h1>{resourceType}</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => changeResourceType("posts")}>posts</button>
                <button onClick={() => changeResourceType("comments")}>comments</button>
                <button onClick={() => changeResourceType("todos")}>todos</button>
            </div>

            {items.map((item) => (
                <p>{item.title}</p>
            ))}
        </div>
    );
}