import React from "react";

 export const apifetching = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'GET'
    })
    return await response.json();
}
