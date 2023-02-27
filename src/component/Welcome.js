import React from "react";

class Welcome extends React.Component
{
   
    constructor(props)
    {
        super(props);
        this.state={nm:"Welcome"};

    }
    render()
    {
        var he="hello";
        return(
            <div>
                <p>{this.state.nm}</p>

                <input type="button" name="nm" value={he} 
                    onClick={(e)=>{this.setState({nm:e.target.value})}}
                ></input>
            </div>
        )
    }
}
export default Welcome;