import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(prop);
  this.state = {
    todos:[
      { description: 'Buy Birthday gift', isCompleted:true },
      { description: 'Take out trash', isCompleted: false },
      { description: "Meet up with Eddy", isCompleted: false }
    ]
  };
  }
  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
       <ToDo key={ index } description={todo.description} isCompleted={todo.isCompleted}/>
     )}
       </ul>
      </div>
    );
  }
}

export default App;
