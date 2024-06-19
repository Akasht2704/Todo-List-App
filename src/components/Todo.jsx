import {  useState } from "react";

function Todo({todo,id,onEdit,changeCompletion,deleteTodo}) {
    const [complete,setComplete] = useState(todo.completed);
    const [edit,setEdit]=useState(false);
    const [editInput,setEditInput]=useState('');
    return(
        <div className="flex">
        <input type="checkbox" 
          checked = {complete}
          onChange={(e)=>{setComplete(e.target.checked)
            changeCompletion(e.target.checked,id) 
           }}
          className=" w-16 h-8 mt-6"
        />
        {(edit)?
        <input type="text"
         className=" w-96 h-10 text-xl mt-5 rounded-md m-2 text p-3"
           value={editInput}
          onChange={(e)=>setEditInput(e.target.value)}
        />
        :<div className=" h-10 w-96  bg-slate-400 text-xl mt-5    rounded-md m-2 p-2"
        >{todo.name}
        </div>}
        <button type="button"
              className="h-10 w-20 mt-5 bg-emerald-800 text-gray-200
              font-bold text-2xl rounded-lg m-3"
               onClick={()=>{setEdit(!edit);
                    (edit)?onEdit(editInput,id):setEditInput(todo.name)
            }}
        >
            {(edit)?'Save':'Edit'}
        </button>
        <button type="button" className="h-10 w-20 mt-5 bg-red-900 text-gray-200 font-bold text-2xl rounded-lg"
            onClick={()=>deleteTodo(id)}
        >Delete</button>
        <br/>
        </div>
    )
}
export default Todo;