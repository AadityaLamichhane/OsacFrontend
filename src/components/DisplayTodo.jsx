import React from 'react'
function DisplayTodo({todos,setTodos}){

  const handleDelete = (index)=>
  {
   const newtodo = todos.filter(function(todo,key)
      {
        return index!== key;
      })
        
          setTodos(newtodo);
  
  }
    return (
          
            <ul>
            {
              todos.map((element,index)=>(      
              
                <li key = {index}> 
                        {element} 
                < Delete onDelete= {()=>{ handleDelete(index)}}/> 
                 
                </li>
              ))}
            </ul>    
         
    );
  }

    function Delete({onDelete})
    {
      return (
        <button onClick = {onDelete}>Delete</button>
      );
    }
   
  
  export default DisplayTodo;