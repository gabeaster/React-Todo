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
  constructor () {
    super();
    this.state = {
      todos
    };
  }




  // you will need a place to store your state in this component.
  
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Get This Stuff Done</h1>
          <TodoForm />
        </div>
        <TodoList 
          todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;
