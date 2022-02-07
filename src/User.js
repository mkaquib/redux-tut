import React from 'react';

const User = (props)=>{
    console.warn(props.data.name);
    return(
        <div>
            <h1>User component</h1>
            <h2>{props.data.name}</h2>
            <h3>{props.data.age}</h3>
        </div>
    )
}

export default User;