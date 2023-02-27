import { useState } from "react";

const LoginComp=()=>
{
        const [nm,setNm]=useState("");
        const [nm1,setNm1]=useState("");


    return(

        <div>
            Userid:<input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}}></input>
            <br/>
            Password:<input type="password"></input>
            <br/>
            <button input type="button" onClick={()=>{setNm1(nm)}}>Login</button>
            <p>welcome {nm1} ........ </p>
        </div>
    )
    
}
export default LoginComp;