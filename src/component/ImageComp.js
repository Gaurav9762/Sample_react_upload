import pic from './himalayn.jpg';
import {useState} from 'react';
 const ImageComp =()=>
{

        const[flag,setFlag]=useState(true)


    return(
        <div>
            <br/>
            <img src={pic} width="200" height="200" style={{display: flag ? "block":"none"}}/>

            <br/>
           hide/unhide <input type="checkbox" name="flag" checked={flag}
            onChange={()=>{setFlag(!flag)}}></input>

        </div>
    )
    

}
export default ImageComp; 