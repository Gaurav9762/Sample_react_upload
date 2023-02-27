import { useState,useEffect } from "react";

export default function Restapi()
{
    useEffect(()=>{
        fetch("http://localhost:9000/emps")
        .then(resp=>resp.json())
        .then(data=>setEmps(data));
    },[]);

    const[emps,setEmps]=useState([]);
    console.log(emps);
    return(
        <div>
            <h1>emps</h1>
            <table>
                <tbody>
               {
                  
                    emps.map(v=>{return <tr>
                        <td>{v.EMPNO}</td>
                        <td>{v.ENAME}</td>
                        <td>{v.JOB}</td>
                            </tr>})
               }
               </tbody>
            </table>
        </div>
    )
}