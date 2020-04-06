import React from 'react';

const Todo = props => {
    return (
        <div className="completedOrNot"
        >
            <p>{props.item.task}</p>

        </div>
    );
};

export default Todo;