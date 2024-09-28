import { useState } from 'react'
import React from 'react';
import CreateTodo from './components/CreateTodo';
import DisplayTodo from './components/DisplayTodo';

import './App.css'

function App() {
  const [todos,setTodos] = useState([]);
  const [EnteredValue,setEnteredValue] = useState('');

  function clicked()
{
  if (EnteredValue==='' )
  {
    return ;
  }
    setTodos([...todos,EnteredValue]);
    setEnteredValue('');

}

  return (
    <>
    
    <CreateTodo  EnteredValue={EnteredValue} setEnteredValue={setEnteredValue}  clicked={clicked} ></CreateTodo>
    <DisplayTodo todos={todos} setTodos={setTodos}></DisplayTodo>
    
    </>
  )
}



export default App
