
function FunFact(ps)
{     
        var fact =1;
        var i;

        for(i=1 ; i<=ps.num ;i++)
        {
            fact = fact * i;

        }
        return(
            <div>
                <p>fact using fun comp:{fact}</p>
            </div>
        )
        
 }
export default FunFact;
