import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleTask={props.toggleTask}/>
            ))}
            <button className="clear-btn">Get 'Em Outta Here</button>
        </div>
    );
};

export default TodoList;