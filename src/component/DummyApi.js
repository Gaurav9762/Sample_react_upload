import { useEffect, useState } from "react";

export default function DummyApi()
{
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/todos")
        .then(resp=>resp.json())
        .then(data=>setTodos(data));
    },[]);

    const[todos,setTodos]=useState([]);

    return(
        <div>
            <h1>Todos</h1>
            <table className="table table-bordered">
                {
                    todos.map(v=>{return <tr>
                        <td>{v.id}</td>
                        <td>{v.title}</td>
                        <td>{v.completed.toString()}</td>
                    </tr>})
                }
            </table>
        </div>


    )
}