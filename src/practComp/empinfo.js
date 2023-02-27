import emps from "./emps.js";

export default function Empinfo1() {
    return (
        <div>
            <table border="{1}">
                <tbody>
                {emps.map((v) => {
                    return <tr>
                        <td>{v.eid}</td>
                        <td>{v.name}</td>
                        <td>{v.sal}</td>
                        <td>{v.dept.no}</td>
                        <td>{v.dept.dname}</td>
                    </tr>

                })}
                </tbody>
             

            </table>

        </div>
    )
}