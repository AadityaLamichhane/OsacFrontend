
import React from 'react'



function CreateTodo({EnteredValue,setEnteredValue,clicked,todos,setTodos})
{
   
    return (
        <>
        <input  type="text" placeholder='Add Todo' value = {EnteredValue}
        onChange={(e)=>{
           setEnteredValue(e.target.value);
        }}></input>
    
        <button onClick ={clicked}>Add Todo</button>       
        </>

    )
 
}

export default CreateTodo;