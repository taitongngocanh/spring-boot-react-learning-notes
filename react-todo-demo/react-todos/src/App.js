import TodoTable from './components/TodoTable';
import './App.css';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed monkey', rowAssigned: 'Anh Tai'},
    {rowNumber: 2, rowDescription: 'Do react', rowAssigned: 'Chi Pheo'},
    {rowNumber: 3, rowDescription: 'Have a shower', rowAssigned: 'Thi No'}
  ]

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
      </div>
    </div>
  );
}

export default App;
