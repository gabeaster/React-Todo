import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    render() {
        console.log('rendering form');
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.task}
                    name="task"

                />
                <button>Add Task</button>
            </form> 
        )
    }
}

export default TodoForm;