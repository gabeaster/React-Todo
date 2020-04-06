import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleTask={props.toggleTask}/>
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear 'Em Out
            </button>
        </div>
    );
};

export default TodoList;