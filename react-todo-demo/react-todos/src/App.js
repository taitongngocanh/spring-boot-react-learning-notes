import TodoRowItem from './components/TodoRowItem';
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
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            <TodoRowItem rowNumber={todos[0].roleNumber} rowDescription={todos[0].rowDescription} rowAssigned={todos[0].rowAssigned}/>
            <TodoRowItem rowNumber={todos[1].roleNumber} rowDescription={todos[1].rowDescription} rowAssigned={todos[1].rowAssigned}/>
            <TodoRowItem rowNumber={todos[2].roleNumber} rowDescription={todos[2].rowDescription} rowAssigned={todos[2].rowAssigned}/>       
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
