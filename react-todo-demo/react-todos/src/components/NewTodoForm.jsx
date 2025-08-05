import React, {useState} from "react";

function NewTodoForm(props) {

     const [description, setDescription] = useState('');
     const [assinged, setAssinged] = useState('');

     const submitTodo = () => {
          if (description !== '' && assinged !== '') {
               props.addTodo(description, assinged);
               setAssinged('');
               setDescription('');
          }
     }

     return (
          <div className='mt-5'>
               <form>
                    <div className='mb-3'>
                         <label className='form-label'>Assigned</label>
                         <input type="text" 
                         className='form-control' 
                         required
                         onChange={e => setAssinged(e.target.value)}
                         value={assinged}
                         />
                    </div>
                    <div className='mb-3'>
                         <label className='form-lable'>Description</label>
                         <textarea 
                         className='form-control' 
                         rows={3} 
                         required 
                         onChange={e => setDescription(e.target.value)}
                         value={description}
                         >
                         </textarea>
                    </div>
                    <button 
                    type='button' 
                    className='btn btn-primary mt-3' onClick={submitTodo}>Add new Todo</button>
               </form>
          </div>
     )
}

export default NewTodoForm;