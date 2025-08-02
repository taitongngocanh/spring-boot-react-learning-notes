import TodoRowItem from "./TodoRowItem";
import todos from "./TodoRowItem"

function TodoTable(props) {
     return (
          <table className="table table-hover">
               <thead>
                    <tr>
                         <th scope='col'>#</th>
                         <th scope='col'>Description</th>
                         <th scope='col'>Assigned</th>
                    </tr>
               </thead>
               
               <tbody>
                    <TodoRowItem 
                         rowNumber={
                         props.todos[0].roleNumber} 
                         rowDescription={props.todos[0].rowDescription} 
                         rowAssigned={props.todos[0].rowAssigned} />
                    <TodoRowItem 
                         rowNumber={props.todos[1].roleNumber} 
                         rowDescription={props.todos[1].rowDescription} 
                         rowAssigned={props.todos[1].rowAssigned} />
                    <TodoRowItem 
                         rowNumber={props.todos[2].roleNumber} 
                         rowDescription={props.todos[2].rowDescription} 
                         rowAssigned={props.todos[2].rowAssigned} />
               </tbody>
          </table>
     );
}

export default TodoTable;