
function DisplayTodo({todo}){
    return (
          <> 
            <ul>
            {
                todo.map((element , index)=>(      //using the () instead of {} help to get the implicit return  can still use map()=>{return()}
                
                    <li key = {index}> 
                        {element} 
                     </li>
                ))
              }
            </ul>    
         </>
    )
  }
  export default DisplayTodo