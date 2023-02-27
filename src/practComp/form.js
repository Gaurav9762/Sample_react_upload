import { useState } from "react"

export default function Form()
{
    const [name,changename]=useState();
    const[nm,setName]=useState();
    return(
        <div>
            <form>
                Name: <input type="text" name="uid" 
                onChange={(e)=>{changename(e.target.value)}}></input>
                <span>{name}</span><br></br>
                Password:<input type="password" name="pass"></input><br></br>
                <input type="button" id="btn" name="btn" value="submit" onClick={()=>{setName("welcome "+name)}}></input><br></br>
            </form>
            <p>{nm}</p>
        </div>
    )
}