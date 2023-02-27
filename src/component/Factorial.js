import React from "react";

class Factorial extends React.Component
{
    factorial(num)
    {
        var fact =1;
        var i;

        for(i=1 ; i<=num ;i++)
        {
            fact = fact * i;

        }
        return fact;
    }
    render()
    {
        
        return(
            <div>
                <p>factorial using class compo: {this.factorial(this.props.num)}</p>
            </div>
    
        );
    
    }
    
}

export default Factorial;


