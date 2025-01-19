import React, { useContext } from 'react'
import '../style/Update.css'
import Datacontext from '../Context/Datacontext.jsx'

const Updateemploye = () => {
    const{selectedemployee,handlecancel1,countryListAllIsoData,updateemploye,actionemploye,handledelete}=useContext(Datacontext)

   
    return (

    <>
    <div className='update-container' id='update-container'>
    <form  className='employe-form ' action='/updateemploye' method='POST' onSubmit={actionemploye}>

            <div className='cancel-btn' onClick={handlecancel1} >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>

            <h3 className=' mt-1 heading4employe text-center mb-2'>Employee Details</h3>
            <h6 className='text-center'>ID {selectedemployee.employeid}</h6>
            <div className='lablename mb-3'>
                <label htmlFor='name' className='form-lable '>Name</label>
                <input type='text' required id='name' name='name' className='common-input1 form-control' placeholder='Employee Name' value={selectedemployee.name}  onChange={(e)=>updateemploye("name",e.target.value)} />
            </div>
            
          
            <div className='row-1-form  mb-3'>

                <div className='cont4in select-margin'>
                    <label htmlFor='salary' className='form-lable '>Salary</label>
                    <input type='number' id="salary" required name='salary' className='common-input1 form-control '  placeholder='Salary (₹)' value={selectedemployee.salary } onChange={(e)=>updateemploye("salary",e.target.value)} />
                </div>
                <div className='cont4in'>
                    <label htmlFor='phone_number' className='form-lable '>Phone number</label>
                    <input type='number' id="phone_number" required name='PhoneNumber' placeholder='Phone number' className=' common-input1 form-control' value={selectedemployee.phonenumber
                    } onChange={(e)=>updateemploye("phonenumber",e.target.value)} />
                </div>         

            </div>

            <div className='row-1-form mb-3'>

                <div className='cont4in select-margin'>
                    <label htmlFor='role'  className='form-lable '>Role</label><br/>
                    <input type='text' id="role" required name='role' placeholder='Role' className=' form-control common-input1 ' value={selectedemployee.role}  onChange={(e)=>updateemploye("role",e.target.value)} />
                </div>
                <div className='cont4in'>
                    <label htmlFor='department' className='form-lable '>Department</label><br/>
                    <input type='text' id='department' required name='department' placeholder='Department' className=' form-control common-input1 ' value={selectedemployee.department} onChange={(e)=>updateemploye("department",e.target.value)}   />
                </div>
                         
            </div>
            
            <div className='row-1-form mb-2'>
                <div className='cont4in select-margin'>
                    <label htmlFor='gender' className='form-lable '>Gender</label><br/>
                    <select name='gender'required  className='select ' id='gender' value={selectedemployee.gender} onChange={(e)=>updateemploye("gender",e.target.value)} >
                    <option value="">Gender</option>  
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option> 
                    <option value="Others">Transgender</option> 
                    </select>
                </div>
                <div className='cont4in'>
                    <label htmlFor='country' className='form-lable '>Country</label><br/>
                    <select name='country'required   className='select' id='country' value={selectedemployee.country} onChange={(e)=>updateemploye("country",e.target.value)} >
                    <option value="">Country</option> 
                    {countryListAllIsoData.map((country)=>(
                        <option value={country.name} key={country.code}>{country.name}</option> 
                    ))} 
                    
                    </select>

                </div>

            </div>

            
          
            <div className='btn-div btn-group mb-2 mt-4'>
                <button className='btn btn-grp-update' type='submit'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-1'><path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>Update
                </button>

                <button type='button' className='btn submit-btn btn-grp-del ' onClick={()=>handledelete(selectedemployee)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash me-1" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    Delete
                </button>
                
                
            </div>

               
            
            
        </form>

    </div>
    </>
  )
}
export default Updateemploye;
