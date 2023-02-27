import React from "react";

class TimeDate extends React.Component
{
    render()
    {
        var time= new Date();

        var str="";
        var nm = "Garry";
        str+= time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+":"+
        time.getDate()+"/"+time.getMonth()+"/"+time.getFullYear();

        return(
        <div>
            <p> Welcome {nm}</p>

            <h1> IT WAS a good DAY.....</h1>

        <h2>{str}</h2> 
        </div>
        ) 
    }

}
export default TimeDate;