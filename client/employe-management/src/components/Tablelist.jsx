import React, { useContext } from 'react'
import '../style/Table.css'
import '../style/Addemploye.css'
import Tabledef from './Tabledef.jsx'
import Datacontext from '../Context/Datacontext.jsx'

const Tablelist = () => {
    const{isloading}=useContext(Datacontext)
    
  return (
    <>
    {isloading?(
        <div className='loading-div'>
            <div className="loader mb-2"></div>
            <h6>Loading Data...</h6>
        </div>
        
    ):(
    <table className="table  table-hover table-bordered mt-4">
        <thead className='thead'>
            <tr className='text-center'>
            <th scope="col">Employee Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Role</th>
            <th scope="col" className='department'>Department</th>
            <th scope="col">Salary</th>           
            </tr>
        </thead>
        <Tabledef/>
    </table>
    )}
    
    </>
  )
}
export default Tablelist
