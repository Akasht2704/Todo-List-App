import { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";

function TodoList() {
    const [list, setList]=useContext(TodoContext)
    const changeCompletion = (complete,id)=>{
      const upList = list.map((tc)=>{
       if(tc.id===id)
       tc.completed = complete
       return tc;})
       setList(upList)
     console.log(complete,id);  
    }
    const onEdit = (changedName,id)=>{
      const updatedList = list.map((td)=>{
        if(td.id===id)
        td.name=changedName
        return td;})
       setList(updatedList)
    }
    const deleteTodo = (id)=>{
      setList(list.filter((t)=>t.id!==id))
    }
    return(
        <>
          {list.map((t)=>(<Todo key={t.id} todo={t} id = {t.id}
          onEdit = {onEdit} changeCompletion={changeCompletion}
          deleteTodo={deleteTodo}
          />))}
        </>
    )
}
export default TodoList;
