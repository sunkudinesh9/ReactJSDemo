import React, { useReducer } from 'react';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


import { TodoContext } from "./context/TodoContext"
import TodoReducer from "./context/reducer"
import ToDoForm from "./components/TodoForm"
import ToDo from './components/Todo';

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo with context API</h1>
        <ToDo />
        <ToDoForm />
      </Container> 
    </TodoContext.Provider>
  );
};

export default App;
