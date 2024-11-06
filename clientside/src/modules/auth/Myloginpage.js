import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/zencode.png'
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Myapi from "../shares/Myapi";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CachedIcon from '@mui/icons-material/Cached';
import Myheader from '../shares/Myheaderpage';
import { useDispatch } from "react-redux";
import { increment } from '../reduxpage/Myaction';


function Myloginpage() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    // Generates a random captcha code with numbers and symbols, refreshing every 30 seconds or on demand
    const [captcha, setCaptcha] = useState('');
    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#&';
        let newCaptcha = '';

        for (let i = 0; i < 6; i++) {
            const randomChar = characters[Math.floor(Math.random() * characters.length)];
            newCaptcha += randomChar;
        }
        return newCaptcha;
    };

    useEffect(() => {
        setCaptcha(generateCaptcha());

        const interval = setInterval(() => {
            setCaptcha(generateCaptcha());
        }, 15000);  // Adjusted to refresh every 15 seconds for extra security

        return () => clearInterval(interval);
    }, []);

    const reloadCaptcha = () => {
        setCaptcha(generateCaptcha());
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    // Validates if the entered captcha matches the generated captcha, and shows an error message if it doesn't
    const mysubmit = (myform) => {

        if (myform.captcha !== captcha) {
            setError("captcha", { type: "manual", message: "Captcha does not match!" });
            return;
        }


    };

    // Manages login state and updates email or password fields when user types
    const [login, setlogin] = useState({
        email: "",
        pass: ""
    });

    const loginuser = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setlogin((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }

    // Handles user login by validating input, sending login data to the API, and processing the response
    const userlogin = async () => {
        const { email, pass } = login;
        if (login.email === "" || login.pass === "") {
            alert("Email id and Password cannot be blank!");
        }
        else {
            const datares = await fetch(`${Myapi}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, pass
                })
            });
            const resdata = await datares.json();
            console.log(resdata);



            if (resdata.status === 220) {
                alert("Your are sucessfully logged in");
                navigate('/');
                dispatch(increment(resdata))
            }

            if (resdata.status === 620) {
                alert("e-mail not found");
            }

            if (resdata.status === 421) {
                alert("e-mail and Password didn't match");
            }
        }

    }



    return (
        <>
         {/* Login form with fields for email, password, and captcha, including validation and submission handling */}

            <Myheader />
            <form className="wrapper" onSubmit={handleSubmit(mysubmit)}>
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
                                            <label class="form-label l-label"><EmailIcon />Email address</label>
                                            <input type="email" className="form-control l-input" {...register("email", { required: true })} name="email" value={login.email} onInput={loginuser} />
                                            {errors.email?.type === "required" && <p className='error-code'>@email id required!</p>}
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div class="mb-3">
                                            <label class="form-label l-label"><LockIcon />Password</label>
                                            <div className="">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control l-input"
                                                    {...register("password", { required: true })}
                                                    name="pass"
                                                    value={login.pass}
                                                    onInput={loginuser} />
                                                <button onClick={() => setShowPassword(!showPassword)} edge="end" className="show-pass-btn">
                                                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-4'>
                                        <div className="mb-3 d-flex">
                                            <div className="form-control captcha " style={{ fontWeight: "bold" }}>{captcha}</div>
                                            <button type="button" onClick={reloadCaptcha} className={`captcha-reload ${isAnimating ? 'animate' : ''}`}><CachedIcon /></button>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className="mb-3">
                                            <label className="form-label l-label">Enter Captcha</label>
                                            <input
                                                type="text"
                                                className="form-control l-input"
                                                {...register("captcha", { required: true })} />
                                            {errors.captcha && <p className='error-code'>{errors.captcha.message || "Captcha is required!"}</p>}
                                        </div>
                                    </div>

                                    <div className='col-12 text-center'>
                                        <div class="mb-3">
                                            <button className='btn c-btn' type="button" onClick={userlogin}>Login</button>
                                        </div>
                                    </div>
                                    <div className='col-12 text-center'>
                                        <div class="mb-3">
                                            <p className=''>Don't have an account</p>
                                        </div>
                                    </div>

                                    <div className='col-12 text-center'>
                                        <div class="mb-3">
                                            <Link to="/myregistorpage" className="btn c-btn">Register Now</Link>
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

export default Myloginpage