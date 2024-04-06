import { useState } from "react"
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoContext from "./context/TodoContext";

function App() {
  const [list, setList]=useState([
    {
      id:1,
      name :'todo1'
    },
   {
     id:2,
     name :'todo2'
   }
  ]);
    
  return (
    
   <TodoContext.Provider value={[list,setList]}> 
   <AddTodo />
   <TodoList />

   </TodoContext.Provider>
    
  )
}

export default App
