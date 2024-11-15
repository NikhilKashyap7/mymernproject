import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/zencode.png'
import Myapi from "../shares/Myapi";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GirlIcon from '@mui/icons-material/Girl';
import BoyIcon from '@mui/icons-material/Boy';
import TransgenderIcon from '@mui/icons-material/Transgender';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Myheader from '../shares/Myheaderpage';
import { toast, ToastContainer } from 'react-toastify';
function Myregistorpage() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Returns the date exactly 18 years ago from today in "YYYY-MM-DD" format
    const getEighteenYearsAgoDate = () => {
        const today = new Date();
        today.setFullYear(today.getFullYear() - 18);
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    // Sets up user state with empty fields and a default value for some fields
    const [user, setuser] = useState({
        email: "",
        fullname: "",
        phone: "",
        gender: "",
        dob: getEighteenYearsAgoDate(),
        course: "Mean",
        pass: "",
        confirmpass: ""
    });

    //State to store the password strength
    const [passwordStrength, setPasswordstrength] = useState('');

    // Updates the user state with the new input value
    const updateuser = (e) => {
        const { name, value } = e.target;
        setuser((prev) => ({
            ...prev,
            [name]: value
        }));

        // Checking the password strength if password field is updated
        if (name === 'pass') {
            checkPasswordStrength(value);
        }
    };

    const checkPasswordStrength = (password) => {
        if (password.length < 8) {
            setPasswordstrength('Weak');
        }
        else if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
            setPasswordstrength('Strong');
        }
        else if (password.length >= 8) {
            setPasswordstrength('Moderate');
        }
        else {
            setPasswordstrength('');
        }
    };

    // Validates user input fields and submits registration data to the API if all checks pass
    const mysubmitdata = async (e) => {
        e.preventDefault();
        const { email, fullname, phone, gender, course, dob, pass, confirmpass } = user;

        const emailValid = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

        const { pass1, confirmpass1 } = user;
        if (pass1 !== confirmpass1) {
            alert("Passwords do not match");
            return;
        }
        if (passwordStrength === 'Weak') {
            alert("Please choose a stronger password");
            return;
        }
        if (!emailValid.test(email)) {
            alert("!Please write a valid email-id")
            return;
        }
        const phoneValid = /^\d{10}$/;
        if (!phoneValid.test(phone)) {
            alert("Please enter a valid 10-Digit phone number,")
            return;

        }
        if (pass !== confirmpass) {
            alert("!Password didn't Match");
            return;
        }

        if (user.email === '' || user.fullname === "" || user.pass === "") {
            alert("Please! fill inputs correctly");
            return;
        }

        else {
            const res = await fetch(`${Myapi}/registoruser`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, fullname, phone, gender, course, dob, pass
                })
            });
            const data = await res.json();
            // console.log(data);
            // alert("Welcome You Are Registered");
            // navigate("/myloginpage");
            toast.success("Welcome You are successfully registered",{ theme: "dark" });
            setTimeout(() => {
                navigate("/myloginpage");
            }, 4000)
        }
    }


    return (
        <>
            {/* Registration form with fields for user input, including email, name, phone, gender, date of birth, course selection, and password */}
            <Myheader />
            <form className='r-wrapper' onSubmit={mysubmitdata}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 col-sm-12 p-3 rounded shadow registor'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <ToastContainer />
                                    <div className='col-md-12 text-center'>
                                        <div className='mb-3 '>
                                            <img src={logo} alt='company logo' className='r-logo' />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label"><EmailIcon />Email address</label>
                                            <input type="email" className="form-control r-input" name='email' value={user.email} onInput={updateuser} />

                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label">FullName</label>
                                            <input type="text" className="form-control r-input" name='fullname' value={user.fullname} onInput={updateuser} />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label"><LocalPhoneIcon />Phone No</label>
                                            <input type="text" className="form-control r-input" name='phone' value={user.phone} onInput={updateuser} />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label">Gender</label><br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input " type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={updateuser} />
                                                <label className="form-check-label r-label"><BoyIcon />Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input " type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={updateuser} />
                                                <label className="form-check-label r-label"><GirlIcon />Female</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input " type="radio" name="gender" value="Others" checked={user.gender === "Others"} onChange={updateuser} />
                                                <label className="form-check-label r-label"><TransgenderIcon />Others</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label"><DateRangeIcon />DOB</label>
                                            <input type="date" className="form-control r-input" name='dob' value={user.dob} onInput={updateuser} />

                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
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
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label"><LockIcon />Password</label>
                                            <input type={showPassword ? "text" : "password"}
                                                className="form-control r-input"
                                                name='pass' value={user.pass}
                                                onInput={updateuser}
                                            />
                                            <button type='button' onClick={() => setShowPassword(!showPassword)} edge="end" className="show-pass-btn">

                                                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                            </button>

                                            {passwordStrength && passwordStrength !== 'Strong' && (
                                                <div className='text-danger'>
                                                    <small>Password Strength: <strong>{passwordStrength}</strong></small>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label r-label"><LockIcon /> Confirm Password</label>
                                            <input type={showConfirmPassword ? "text" : "password"} className="form-control r-input" name='confirmpass' value={user.confirmpass} onInput={updateuser} />
                                            <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end" className="show-pass-btn">

                                                {showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className='col-12 text-center'>
                                        <div className="mb-3 ">
                                            <Link to="/myregistorpage" type="submit" className='btn btn-success r-btn' onClick={mysubmitdata}>Register Now</Link>
                                        </div>
                                        <p style={{ color: 'maroon', textDecoration: 'underline' }}>Already Have an account</p>
                                    </div>
                                    <div className='col-12 text-center'>
                                        <div className="mb-3 ">
                                            <Link to="/myloginpage" className="btn btn-success  r-btn">Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form></>
    )
}

export default Myregistorpage