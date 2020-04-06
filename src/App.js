import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
// design `App` to be the parent component of your application.
// you will need a place to store your state in this component.
// this component is going to take care of state, and any change handlers you need to work with your state

//here is my constructor function. I'm calling super() and storing state here. 
  constructor () {
    super();
    this.state = {
      todos //same as === groceries: groceries
    };
  }

//here is my function to add new tasks
  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };



  
  
  
  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>Get This Stuff Done</h1>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
          todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;
