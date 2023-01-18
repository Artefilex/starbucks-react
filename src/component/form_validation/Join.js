import React from 'react'
import "../style.css"
import { useFormik} from 'formik';
import userValidate from './Formvalidation';




function Forms() {


    const {handleChange,handleSubmit, values,errors,touched} = useFormik({
      initialValues:{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        check:[]
  
      },
     
      onSubmit: (values) => {
  
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema : userValidate

    });
    return (
   <div className='form-center'>
     <div className='form-main'>
      <div>
      <h1>Create an account</h1>
      <h3>STARBUCKS® REWARDS</h3>
      <p>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore. </p>
      </div>
      
       
  
        <form onSubmit={handleSubmit}>
         <div className='label-input'>
        
          <input id="firstName" placeholder='First Name' value={values.firstName} name="firstName" onChange={handleChange} />
          {
            
              errors.firstName && touched.firstName &&<div className='error'>{errors.firstName}</div>
          
          }
         </div>
            
         <div className='label-input'>
    
         <input id="lastName" placeholder='Last Name'  value={values.lastName} name="lastName" onChange={handleChange} />
         {
            
            errors.lastName && touched.lastName &&<div className='error'>{errors.lastName}</div>
        
        }
         </div>

         <div className='label-input'>
        
          <input id="email"  placeholder='Email'  name="email" value={values.email} type="email" onChange={handleChange} /> 
         {
            
            
              errors.email && touched.email &&<div className='error'>{errors.email}</div>
          
          
         }
         </div>

          <div className='label-input'>
         
          <input id="password" placeholder='Password'   value={values.password} name="password" type="password" onChange={handleChange} /> 
          {
            
            
            errors.password && touched.password &&<div className='error'>{errors.password}</div>
        
        
       }
          </div>
          <p>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>
         <div className='checkbox-input'>
         <input type="checkbox" className='checkbox' name='check' value={true} onChange={handleChange}/> 
         <p>Yes, I'd like email from Starbucks</p>
          
         </div>
        
          <div className='checkbox-input'>
          <input type="checkbox" name='check' className='checkbox'  value={true} onChange={handleChange}/> 
          <p>I agree to the
            Starbucks® Rewards Terms
            opens in new window and the
            Starbucks Card Terms
            opens in new window and have read the
            Starbucks Privacy Statement
            opens in new window.</p>
          </div>


          <button type="submit">Create acount</button>
        </form>
      
    </div>
   </div>
  )
}

export default Forms