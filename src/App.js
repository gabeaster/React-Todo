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

//here is my function to toggle completed tasks 
toggleTask = taskId => {
  console.log(taskId);
  //map over array
  //when we find the item we clicked, toggle the completed field
  //otherwise, return the item untouched
  this.setState({
    todos: this.state.todos.map(item => {
      if (taskId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};

//here is my function to clear completed tasks
clearCompleted = e => {
  e.preventDefault();
  this.setState({
    todos: this.state.todos.filter(task => !task.completed)
  });
};



  
  
  
  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="container" >
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <TodoForm addTask={this.addTask}/>
        <TodoList 
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />

      </div>
      </div>
    );
  }
}

export default App;
