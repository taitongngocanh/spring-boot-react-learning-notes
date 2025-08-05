import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed monkey', rowAssigned: 'Anh Tai'},
    {rowNumber: 2, rowDescription: 'Do react', rowAssigned: 'Chi Pheo'},
    {rowNumber: 3, rowDescription: 'Have a shower', rowAssigned: 'Thi No'},
    {rowNumber: 4, rowDescription: 'Di cau', rowAssigned: 'Di cau'}
  ])

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1, 
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      }
      setTodos(todos => [...todos, newTodo])
    }
  }

  return (
    <div className="mt-5 container">
      <div>
        Your Todo's
      </div>
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div>
        <TodoTable todos={todos}/>
        <button className='btn btn-primary' onClick={addTodo}>
          Add new Todo
        </button>
      </div>
    </div>
  );
}

export default App;
