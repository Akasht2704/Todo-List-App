import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function Todo({todo,id,onEdit}) {
    const [edit,setEdit]=useState(false);
  const [list,setList] = useContext(TodoContext);

    const [editInput,setEditInput]=useState('');
    return(
        <>
        <input type="checkbox" />
        {(edit)?
        <input type="text"
           value={editInput}
          onChange={(e)=>setEditInput(e.target.value)}
        />
        :todo}
        <button type="button"
               onClick={()=>{setEdit(!edit);
                    (edit)?onEdit(editInput):setEditInput(todo)
            }}
        >
            {(edit)?'save':'Edit'}
        </button>
        <button type="button"
            onClick={()=>setList(list.filter((t)=>t.id!==id))}
        >Delete</button>
        <br/>
        </>
    )
}
export default Todo;