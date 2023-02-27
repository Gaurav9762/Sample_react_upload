import emps from "./Emps.js"
function EmpInfo()
{
    return(
        <div>
            <table border='1'>      
              {emps.map((v)=>{return <tr>
                <td>{v.eid}</td> 
              <td>{v.ename}</td>
              <td>{v.salary}</td>
              <td>{v.dept.did}</td></tr>})}        
            </table>
        </div>

    )
}
export default EmpInfo;
