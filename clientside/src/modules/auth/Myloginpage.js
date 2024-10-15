import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/zencode.png'
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
function Myloginpage() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const [captcha, setCaptcha] = useState('');

    const generateCaptcha = () => {
        const a = Math.floor((Math.random() + 1) * 10);
        const b = Math.floor((Math.random() + 1) * 51);

        let y;
        let z;

        if (a >= 2) {
            y = "A";
        }
        else if (a >= 6) {
            y = "C";
        }
        else if (a >= 4) {
            y = "R";
        }
        else if (a >= 8) {
            y = "E";
        }
        else {
            y = "p";
        }

        if (b >= 40) {
            z = "#";
        }
        else if (b > 35) {
            z = "$";
        }
        else {
            z = "@";
        }

        return `${a}${y}${b}${z}`;
    };

    useEffect(() => {
        setCaptcha(generateCaptcha());

        const interval = setInterval(() => {
            setCaptcha(generateCaptcha());
        }, 30000);


        return () => clearInterval(interval);
    }, []);

    const mysubmit = (myform) => {

        if (myform.captcha !== captcha) {
            setError("captcha", { type: "manual", message: "Captcha does not match!" });
            return;
        }


        alert("Successfully logged in!");
        setTimeout(() => {
            navigate("/mainpage");
        }, 2000);
    };



    const [login,setlogin]=useState({
        email:"",
        pass:""
    });

    const loginuser = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setlogin((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
    }

    const userlogin = async()=>{
        const {email,pass}=login;
        if(login.email==="" || login.pass==="")
        {
            alert("Email id and Password cannot be blank!");
        }
        else
        {
            const datares = await fetch("http://localhost:4707/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, pass
                })
            });
            const resdata = await datares.json();
            console.log(resdata);
            if(resdata.status===220)
            {
                alert("Your are sucessfully logged in");
                navigate('/');
            }

            if(resdata.status===620)
            {
                alert("e-mail not found");
            }

            if(resdata.status===421)
                {
                    alert("e-mail and Password didn't match");
                }
        }

    }



    return (
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
                                        <label class="form-label l-label">Email address</label>
                                        <input type="email" className="form-control l-input" {...register("email", { required: true })} name="email" value={login.email} onInput={loginuser} />
                                        {errors.email?.type === "required" && <p className='error-code'>@email id required!</p>}
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label class="form-label l-label">Password</label>
                                        <input type="password" className="form-control l-input" {...register("password", { required: true })} name="pass" value={login.pass} onInput={loginuser} />
                                        {errors.password?.type === "required" && <p className='error-code'>Password is required!</p>}
                                    </div>
                                </div>


                                <div className='col-3'>
                                    <div className="mb-3">
                                        <div className="form-control " style={{ fontWeight: "bold" }}>{captcha}</div>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label className="form-label l-label">Enter Captcha</label>
                                        <input
                                            type="text"
                                            className="form-control l-input"
                                            {...register("captcha", { required: true })}
                                        />
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
                                        <Link to="/Myregistorpage" className="btn c-btn">Register Now</Link>
                                        <Link to="/" className="btn c-btn" style={{ marginTop: '5px' }}>Go Home..</Link>
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