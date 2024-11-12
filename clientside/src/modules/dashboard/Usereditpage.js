import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import logo from '../images/zencode.png'
import Myapi from "../shares/Myapi";
import LockIcon from '@mui/icons-material/Lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import Myheaderpage from '../shares/Myheaderpage';
import Myfooterpage from '../shares/Myfooterpage';

function Usereditpage() {
    const navigate = useNavigate();// Used hooks here for oraganized navigation

    const [showPassword, setShowPassword] = useState(false);

    const { id } = useParams(); // Used Param to get ID from the URL parameters
    const [user, setuser] = useState({
        email: "",
        fullname: "",
        phone: "",
        gender: "",
        dob: "",
        course: "",
        pass: ""
    });// State to hold user details

    //Function to handle input changes
    const edituser = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target; // Getting the name and value from the element that triggered the event
        setuser((a) => {
            return {
                ...a,
                [name]: value //update the specific field in the user state
            }
        })
    }

    //Function to fetcch the user's current data
    const userupdate = () => {
        axios.get(`http://localhost:4707/singleuser/${id}`).then((y) => {
            // console.log(y);
            setuser(y.data);// setting the fetched user data to state
        });
    }

    // useEffect to fetch user data when the component mounts
    useEffect(() => {
        userupdate(); // call user update function on mount 
    }, []);

    //Function to submit the updated user details
    const changedetails = async () => {
        const { email, fullname, phone, gender, dob, course, pass } = user;
        const res = await fetch(`${Myapi}/edituser/${id}`, {
            method: "PATCH", // Using PATCH to update user details
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, fullname, phone, gender, dob, course, pass
            })
        });
        const data = await res.json();//Parse the response as JSON
        // console.log(data);
        alert("User Detail Updated");//Alert user details have been updated
        navigate("/myloginpage"); // Redirect to home page
    }

    return (
        <>
            <Myheaderpage />
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
                                                <input className="form-check-input " type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={edituser} />
                                                <label className="form-check-label r-label">Female</label>
                                            </div>
                                            <div className='form-check form-check-inline'>
                                                <input className='form-check-input' type='radio' name="gender" value="Others" checked={user.gender === "Others"} onChange={edituser} />
                                                <label className='form-check-label r-label'>Others</label>
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
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label"><LockIcon />Password</label>
                                            <input type={showPassword ? "text" : "password"} className="form-control r-input" name='pass' value={user.pass} onInput={edituser} />
                                            <button type='button' onClick={() => setShowPassword(!showPassword)} edge="end" className='show-pass-btn'>

                                                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-12 text-center'>
                                        <div className="mb-3 ">
                                            <button type="button" className='btn btn-success r-btn' onClick={changedetails}>Edit Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Myfooterpage/>
        </>
    )
}

export default Usereditpage