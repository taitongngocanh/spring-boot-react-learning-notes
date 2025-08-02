import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {
      rowNumber:1,
      rowDescription: 'An com',
      rowAssigned: 'Anh Tai'
    },
    {
      rowNumber:2,
      rowDescription: 'Di tam',
      rowAssigned: 'Anh Tai'
    },
    {
      rowNumber:3,
      rowDescription: 'Di ngu',
      rowAssigned: 'Anh Tai'
    }
  ]

  return (
    <div className="mt-5 container">
      <div>
        Your Todo's
      </div>
      <div class="alert alert-warning" role="alert">
        こんにちは、わたしはたいです。
      </div>
      <div>
        <TodoTable todos={todos}/>
      </div>
    </div>
  );
}

export default App;
