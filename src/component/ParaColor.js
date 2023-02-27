import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function ParaColor()
{

    let navigate = useNavigate();
    const[c1,setColor]=useState("black");

    const [count,setCount] = useState(0);

    return(

        <div>
            <p style={{color:c1}} onClick={()=>{setColor("orange")}}>Royal Enfield
             Himalayan bike price in India. Check Royal Enfield Himalayan colours</p>

            <h2>Countt:{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>increment</button>
            <button onClick={()=>{setCount(count-1)}}>decrement</button><br></br>
            <button onClick={()=>{navigate('/Fact')}}>goto</button>
        </div>
    )
}
export default ParaColor;