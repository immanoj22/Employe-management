import React, { useContext, useState } from 'react'
import Datacontext from '../Context/Datacontext.jsx'
import '../style/Addemploye.css'

const Addemploye = () => {
    const{updatefield,postingdata,countryListAllIsoData,newemployee,enableaddform,handlecancel,searchtheemploye}=useContext(Datacontext)
   
   function validatenumber(e){
    const input=e.target;
    const val=input.value;
    const maxdigit=10;
    const numericValue = val.replace(/[^0-9]/g, '');
    if(numericValue.length>maxdigit){
        input.value = numericValue.slice(0, maxdigit);
    }else{
        input.value = numericValue;
    }

   }
  return (
    <>

    <div className='Addemployee-button'>
        <input type='text' name='search' className='form-control search-form common-input' placeholder='Search Employee' onChange={searchtheemploye}  />
        <button type='button' className='btn add-btn' onClick={enableaddform}>Add employee</button>
    </div>
    
    <div className='addemploye-form ' id='addemploye-form'>

        <form onSubmit={newemployee} action='/addemploye' method='POST' className='employe-form'>
            <div className='cancel-btn' onClick={handlecancel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>

            <h3 className='mb-3 mt-1 heading4employe text-center'>Add Employee</h3>

            <div className='lablename mb-3'>
                <label htmlFor='name' className='form-lable '>Name</label>
                <input type='text' required name='name' className='form-control  common-input1' placeholder='Employee Name' value={postingdata.name} onChange={(e)=>updatefield("name",e.target.value)} />
            </div>

            <div className='row-1-form  mb-3'>

                <div className='cont4in select-margin'>
                    <label htmlFor='salary' className='form-lable '>Salary (₹)</label>
                    <input type='number' required name='salary' className='form-control common-input1 form-row-1' onInput={validatenumber} value= {postingdata.salary} onChange={(e)=>updatefield("salary",e.target.value)} placeholder='e.g.,10000' />
                </div>
                <div className='cont4in'>
                    <label htmlFor='phone_number' className='form-lable '>Phone number</label>
                    <input type='number' required name='PhoneNumber' placeholder='e.g., 9876543210' onInput={validatenumber} className='phone-form form-control common-input1' value={postingdata.phonenumber} onChange={(e)=>updatefield("phonenumber",e.target.value)} />
                </div>         

            </div>

            <div className='row-1-form mb-3'>

                <div className='cont4in select-margin'>
                    <label htmlFor='role' className='form-lable '>Role</label><br/>
                    <input type='text' required name='role' placeholder='e.g.,Software Engineer' className='common-input1 form-control ' value={postingdata.role} onChange={(e)=>updatefield("role",e.target.value)} />
                </div>
                <div className='cont4in'>
                    <label htmlFor='department' className='form-lable '>Department</label><br/>
                    <input type='text' required name='department' placeholder='e.g., Engineer' className='common-input1 form-control phone-form'  value={postingdata.department} onChange={(e)=>updatefield("department",e.target.value)} />
                </div>
                         
            </div>
         
            <div className='row-1-form mb-2'>
                <div className='cont4in select-margin'>
                    <label htmlFor='gender' className='form-lable '>Gender</label><br/>
                    <select name='gender'required id='gender' value={postingdata.gender} onChange={(e)=>updatefield("gender",e.target.value)} className='select gender ' >
                        <option value="">Select</option>  
                        <option value="Male">Male</option> 
                        <option value="Female">Female</option> 
                        <option value="Others">Transgender</option> 
                    </select>
                </div>
                <div className='cont4in'>
                    <label htmlFor='country' className='form-lable '>Country</label><br/>
                    <select name='country'required id='country' value={postingdata.country} onChange={(e)=>updatefield("country",e.target.value)} className='select country ' >
                    <option value="">Select</option> 
                    {countryListAllIsoData.map((country)=>(
                        <option value={country.name} key={country.code}>{country.name}</option> 
                    ))} 
                </select>

                </div>

            </div>

            
          
            <div className='btn-div mt-3'>
                <button type='submit' className='btn submit-btn sub '>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill-add me-1" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                </svg>
                    Submit
                </button>
                
            </div>
            
            
        </form>

    </div>
    </>
  )
}
export default Addemploye
