function EmpArr(ps)
{
    const [a,b,c]= ps.e;

    return(
        <div>
            <table border="1" align="center">
                <tr>
                    <td>{a.empid}</td>
                    <td>{a.name}</td>
                    <td>{a.sal}</td>
                </tr>
                <tr>
                    <td>{b.empid}</td>
                    <td>{b.name}</td>
                    <td>{b.sal}</td>
                </tr>
                <tr>
                    <td>{c.empid}</td>
                    <td>{c.name}</td>
                    <td>{c.sal}</td>
                </tr>

            </table>
        </div>

    )

}

export default EmpArr;