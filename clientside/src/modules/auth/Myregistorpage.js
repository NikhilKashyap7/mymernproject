import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import { useForm } from 'react-hook-form';
import logo from '../images/zencode.png'

function Myregistorpage(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm();
    const  mysubmit = (myform)=>{
        
        if(myform)
          {
            toast.success("successfully registor page");
           setTimeout(()=>{
            navigate("/");
           },2000);
          
          }
  
  }
    return(
        <form onSubmit={handleSubmit(mysubmit)}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 p-3 rounded shadow registor'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 text-center'>
                                    <div className='mb-3'>
                                        <img src={logo} alt='company logo' className='c-logo'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control r-input" {...register("email",{required:true})}/>
                            {errors.email?.type==="required" && <p className='error-code'>@email id required!</p>}

                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">FullName</label>
                            <input type="text" className="form-control r-input"  {...register("fullname",{required:true,minLength:5})}/>
                            {errors.fullname?.type==="required" && <p className='error-code'>FullName required! </p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">FullName</label>
                            <input type="text" className="form-control r-input"  {...register("fullname",{required:true,minLength:5})}/>
                            {errors.fullname?.type==="required" && <p className='error-code'>FullName required! </p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control r-input" {...register("phone",{required:true,maxLength:10,minLength:10,pattern:1234567890})}/>
                            {errors.phone?.type==="required" && <p className='error-code'>Please write your no.</p>}
                  {errors.phone?.type==="maxLength" && <p className='error-code'>Write your no. properly</p>}
                  {errors.phone?.type==="minLength" && <p className='error-code'>Write your no. properly</p>}
                  {errors.phone?.type==="pattern" && <p className='error-code'>Use only numbers</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Gender</label><br/>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input r-input" type="radio" name="gender" value="male" {...register("gender",{required:true})}/>
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="female" {...register("gender",{required:true})}/>
                    <label className="form-check-label">Female</label>
                  </div>
                  {errors.gender?.type==="required" && <p className='error-code'>!Please select any option</p>}
                </div>
              </div>
              <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">DOB</label>
                            <input type="date" className="form-control r-input"/>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Course</label>
                           <select className='form-select'>
                            <option>Mern</option>
                            <option>Mean</option>
                            <option>Java</option>
                            <option>Marketing</option>
                            <option>Python</option>
                            <option>DataScience</option>
                           </select>
                          
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control r-input"/>
                           
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3 ">
                           <button type="submit" className='btn btn-success r-btn'>Register Now</button>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3 ">
                           <Link to="/Myloginpage" className="btn btn-success  r-btn">Login</Link>
                           <Link to="/" className="btn btn-success  r-btn">Go Home..</Link>

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

export default Myregistorpage