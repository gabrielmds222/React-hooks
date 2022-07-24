import React, { useState, useEffect } from "react";

export function Effect(){
    const [resourceType, setResourceType] = useState("posts");

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }, [resourceType]);

    return(
        <div>
            <h1>{resourceType}</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => changeResourceType("posts")}>posts</button>
                <button onClick={() => changeResourceType("comments")}>comments</button>
                <button onClick={() => changeResourceType("todos")}>todos</button>
            </div>
        </div>
    );
}