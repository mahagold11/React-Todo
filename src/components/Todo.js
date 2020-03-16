import React from 'react';



const Todo = props => {
    return (
        <div 
            // className = {`item${props.item.completed ? "purchased" : ""}`}
        // onClick = { e => props.toggleTodo(props.item.id)}
        >
        <p>{props.item.task}</p>

        </div>
    )
};

export default Todo