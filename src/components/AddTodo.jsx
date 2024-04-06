import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {
 const [list,setList] =  useContext(TodoContext);
    const [input,setInput] = useState('');
    return(
        <>
        <input type="text"
        placeholder="Add todo task here.."
        value={input}
        onChange={(e)=>{setInput(e.target.value);
            console.log(e.target.value);

        }}
         />
        <button type="button"
                onClick={()=>{setList((prev)=>([...prev,{id:Math.random()*1000+1,name:input}]));
                setInput('');
            }

            }      
        >
            Add</button>
        <br/>
        </>
    )
}
export default AddTodo;
