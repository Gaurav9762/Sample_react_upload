import React from "react";

class Acceptname extends React.Component
{
    constructor(ps)
    {
        super(ps)
        this.state={nm:"yyy"};

    }
    render(){
        return(
                <div>
                    <h1>welcome {this.state.nm}</h1>
                    <input type="text" name="nm" value={this.state.value}
                    onChange={(e)=>{this.setState({nm:e.target.value})}}></input>

                </div>
            )

    }
  
}
export default Acceptname;