import React from 'react';



const Todo = props => {
    return (
        <div 
            onClick={e => props.toggleDone(props.item.id)} 
        >
        <p>{props.item.task}</p>

        </div>
    )
};

export default Todo