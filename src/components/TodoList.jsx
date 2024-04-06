import { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";

function TodoList() {
    const [list, setList]=useContext(TodoContext)
    return(
        <>
          {list.map((t)=>(<Todo key={t.id} todo={t.name} id = {t.id}
          onEdit = {(changedName)=>{
            const updatedList = list.map((td)=>{
              if(td.id==t.id)
              td.name=changedName
              return td;})
             setList(updatedList)
          }}
          />))}
        </>
    )
}
export default TodoList;
