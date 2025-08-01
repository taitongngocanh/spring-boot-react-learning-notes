import TodoRowItem from './components/TodoRowItem';
import './App.css';

function App() {
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
            <TodoRowItem />
            <tr>
              <td>2</td>
              <td>Build a Todo App</td>
              <td>Jane Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
