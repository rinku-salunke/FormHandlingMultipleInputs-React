import { useState } from 'react';
import Login from './Login'; // make sure this path is correct
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
