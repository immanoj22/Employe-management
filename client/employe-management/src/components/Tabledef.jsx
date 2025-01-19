import React from 'react'
import Datacontext from '../Context/Datacontext.jsx'
import { useContext } from 'react'
import '../style/Addemploye.css'

const Tabledef = () => {
    const{filtereddata,allempolyee,handletablerow}=useContext(Datacontext)
    const f=new Intl.NumberFormat(undefined,{
      currency:"INR",
      style:"currency"
    })

  return (
    <>
    <tbody>
      {filtereddata.map((empl)=>{
        return(
          <tr className='text-center table-row' key={empl.employeid} onClick={()=>handletablerow(empl)} >
                    <th scope="row">{empl.employeid}</th>
                    <td>{empl.name}</td>
                    <td>{empl.gender}</td>
                    <td>{empl.role}</td>
                    <td className='department'>{empl.department}</td>
                    <td>{f.format(empl.salary)}</td>                  
                </tr>
        )
      })}
    </tbody>
    
    </>
  )
}
export default Tabledef
