import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../images/zencode.png'
import Myapi from "../shares/Myapi";

function Usereditpage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [user, setuser] = useState({
        email: "",
        fullname: "",
        phone: "",
        gender: "",
        dob: "",
        course: "",
        pass: ""
    });

    const edituser = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setuser((a)=>{
            return{
                ...a,
                [name]:value
            }
        })
    }

    const userupdate = ()=>{
        axios.get(`http://localhost:4707/singleuser/${id}`).then((y)=>{
            // console.log(y);
            setuser(y.data);
        });
    }
    useEffect(()=>{
        userupdate();
    },[]);

    const changedetails = async()=>{
        const {email, fullname, course, phone, dob, pass, gender} = user;
        const res =await fetch(`${Myapi}/edituser/${id}` ,{
            method: "PATCH",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                email,fullname, phone, course, dob, pass, gender
            })
        });
        const data = await res.json();
        // console.log(data);
        alert("User Detail Updated");
        navigate("/");
    }

  return (
    <form className='r-wrapper'>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-8 p-3 rounded shadow registor'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='mb-3'>
                                <img src={logo} alt='company logo' className='c-logo' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">Email address</label>
                                <input type="email" className="form-control r-input" name='email' value={user.email} onInput={edituser} />

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">FullName</label>
                                <input type="text" className="form-control r-input" name='fullname' value={user.fullname} onInput={edituser} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">Phone No</label>
                                <input type="text" className="form-control r-input" name='phone' value={user.phone} onInput={edituser} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">Gender</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input " type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={edituser} />
                                    <label className="form-check-label r-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input " type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={edituser}/>
                                    <label className="form-check-label r-label">Female</label>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">DOB</label>
                                <input type="date" className="form-control r-input" name='dob' value={user.dob} onInput={edituser} />

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">Course</label>
                                <select className='form-select r-input' name='course' value={user.course} onChange={edituser}>
                                <option>Mean</option>
                                    <option>Mern</option>
                                    <option>Java</option>
                                    <option>Marketing</option>
                                    <option>Python</option>
                                    <option>DataScience</option>
                                </select>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label r-label">Password</label>
                                <input type="password" className="form-control r-input" name='pass' value={user.pass} onInput={edituser} />

                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <div className="mb-3 ">
                                <button type="submit" className='btn btn-success r-btn'  onClick={changedetails}>Edit Now</button>
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <div className="mb-3 ">
                                <Link to="/myloginpage" className="btn btn-success  r-btn"  >Login</Link>
                                <Link to="/" className="btn btn-success  r-btn">Go Home..</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>  )
}

export default Usereditpage