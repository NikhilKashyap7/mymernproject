import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/zencode.png'
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
function Myloginpage(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm();
    const  mysubmit = (myform)=>{
        
        if(myform)
          {
            toast.success("successfully logged in page");
           setTimeout(()=>{
            navigate("/");
           },2000);
          
          }
  
  }
    return(
        <form  className="wrapper" onSubmit={handleSubmit(mysubmit)}>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-5  p-3 rounded shadow login'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 text-center'>
                            <div class="mb-3">
                              <img src={logo} alt='Company logo' className='c-logo' />
                            </div>
                            
                           



                        </div>
                        
                        


                        <div className='col-12'>
                            <div class="mb-3">
                                <label class="form-label l-label">Email address</label>
                                <input type="email" className="form-control l-input" {...register("email",{required:true})}/>
                                {errors.email?.type==="required" && <p className='error-code'>@email id required!</p>}
                            </div>
                        </div>
                        <div className='col-12'>
                            <div class="mb-3">
                                <label class="form-label l-label">Password</label>
                                <input type="password" className="form-control l-input" />
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <div class="mb-3">
                               <button className='btn c-btn'>Login</button>
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <div class="mb-3">
                               <p className=''>Don't have an account</p>
                            </div>
                        </div>

                        <div className='col-12 text-center'>
                            <div class="mb-3">
                               <Link to="/Myregistorpage" className="btn c-btn">Register Now</Link>
                               <Link to="/" className="btn c-btn" style={{marginTop:'5px'}}>Go Home..</Link>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>

    </form>
    )
}

export default Myloginpage