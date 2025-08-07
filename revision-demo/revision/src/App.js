import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ username: '', email: '' });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${form.username}, Email: ${form.email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>

    <button onClick={() => setShowMessage(!showMessage)} className='btn btn-primary'>Click me</button>
    {showMessage ? <p>Hello Cac Ban</p> : ''}
    </div>
    
    
  );
}

export default App;
