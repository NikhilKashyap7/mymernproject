import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/zencode.png'

function Myregistorpage() {
    const navigate = useNavigate();
    
    const getEighteenYearsAgoDate = () => {
        const today = new Date();
        today.setFullYear(today.getFullYear() - 18); 
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };
    const [user, setuser] = useState({
        email: "",
        fullname: "",
        phone: "",
        gender: "",
        dob: getEighteenYearsAgoDate(),
        course: "",
        pass: ""
    });

    const updateuser = (a) => {
        console.log(a.target.value);
        const { name, value } = a.target;
        setuser((b) => {
            return {
                ...b,
                [name]: value
            }
        })
    }

    const mysubmitdata = async () => {
        const { email, fullname, phone, gender, course, dob, pass  } = user;
        if (user.email === '' || user.fullname === "" || user.pass === "") {
            alert("Please! fill inputs correctly");
        }
        else {
            const res = await fetch("http://localhost:4707/registoruser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, fullname, phone, gender, course, dob, pass
                })
            });
            const data = await res.json();
            console.log(data);
            alert("Welcome You Are Registered");
            navigate("/");
        }

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
                                        <input type="email" className="form-control r-input" name='email' value={user.email} onInput={updateuser} />

                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label r-label">FullName</label>
                                        <input type="text" className="form-control r-input" name='fullname' value={user.fullname} onInput={updateuser} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label r-label">Phone No</label>
                                        <input type="text" className="form-control r-input" name='phone' value={user.phone} onInput={updateuser} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label r-label">Gender</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input " type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={updateuser} />
                                            <label className="form-check-label r-label">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input " type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={updateuser}/>
                                            <label className="form-check-label r-label">Female</label>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label r-label">DOB</label>
                                        <input type="date" className="form-control r-input" name='dob' value={user.dob} onInput={updateuser} />

                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label r-label">Course</label>
                                        <select className='form-select r-input' name='course' value={user.course} onChange={updateuser}>
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
                                        <input type="password" className="form-control r-input" name='pass' value={user.pass} onInput={updateuser} />

                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <div className="mb-3 ">
                                        <button type="submit" className='btn btn-success r-btn'  onClick={mysubmitdata}>Register Now</button>
                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <div className="mb-3 ">
                                        <Link to="/Myloginpage" className="btn btn-success  r-btn"  >Login</Link>
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