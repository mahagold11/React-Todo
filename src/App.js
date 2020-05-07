import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'


const originalTodo = [
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
];





class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todo: originalTodo
    }
  }

  addItem = itemName => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: itemName,
          completed: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };

  toggleDone = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearDone = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed;
      })
    });
  };

  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addItem = {this.addItem}
        />
        <TodoList 
          todo = {this.state.todo}
          toggleDone = {this.toggleDone}
          clearDone = {this.clearDone}
        />
      </div>

    );
  }
}

export default App;
