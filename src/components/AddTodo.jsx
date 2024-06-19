import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {
 const [list,setList] =  useContext(TodoContext);
    const [input,setInput] = useState('');
    return(
        <>
        <input type="text"
         className="h-12 w-80 bottom-1 bg-gray-500 font-semibold text-xls border-r-black rounded-xl text-2xl  text-gray-200"
        placeholder="Add todo task here.."
        value={input}
        onChange={(e)=>{setInput(e.target.value);
            console.log(e.target.value);

        }}
         />
        <button type="button"
                className=" bg-slate-700 w-32 h-12 border-slate-950  rounded-xl font-bold text-2xl text-gray-50 m-5"
                onClick={()=>{setList((prev)=>([...prev,{id:Math.random()*1000+1,name:input,completed:false}]));
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
