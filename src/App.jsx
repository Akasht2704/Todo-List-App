import {useEffect,useState} from "react"
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoContext from "./context/TodoContext";

function App() {
  const [list, setList]=useState([]);
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos);
    if(todos&&todos.length>0)
    setList(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(list))
  },[list])
  
    
  return (
   <TodoContext.Provider value={[list,setList]}> 
    <div className=" w-screen h-screen flex flex-col items-center  justify-center bg-cyan-950 ">
     <AddTodo />
     <TodoList />
    </div>
   </TodoContext.Provider> 
  )
}

export default App
