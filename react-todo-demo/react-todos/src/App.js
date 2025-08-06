import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import NewTodoForm from './components/NewTodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed monkey', rowAssigned: 'Anh Tai'},
    {rowNumber: 2, rowDescription: 'Do react', rowAssigned: 'Chi Pheo'},
    {rowNumber: 3, rowDescription: 'Have a shower', rowAssigned: 'Thi No'},
    {rowNumber: 4, rowDescription: 'Di cau', rowAssigned: 'Di cau'}
  ])

  const addTodo = (description, assinged) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
        rowNumber: todos.length + 1, 
        rowDescription: description,
        rowAssigned: assinged
      }
    setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filterd = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filterd);
  }

  return (
    <div className="mt-5 container">
      <div>
        Your Todo's
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div>
        <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        <button className='btn btn-primary'>
          Add new Todo
        </button>
        <NewTodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
