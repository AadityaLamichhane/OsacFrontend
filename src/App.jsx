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

    setTodos([...todos,EnteredValue]);
    setEnteredValue('');

}

  return (
    <>
    
    <CreateTodo  EnteredValue={EnteredValue} setEnteredValue={setEnteredValue}  clicked={clicked} ></CreateTodo>
    <DisplayTodo todo={todos} setTodo={setTodos}></DisplayTodo>
    
    </>
  )
}



export default App
