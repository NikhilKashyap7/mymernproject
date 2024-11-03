import React from "react";
import cyber from '../images/cybersecurity.jpg'
import Cybersecurity1 from '../images/cybersecurity1.jpg'
import { Link } from "react-router-dom";
import Myheaderpage from "../shares/Myheaderpage";
import Myfooterpage from "../shares/Myfooterpage";
function Cybersecurity() {
    return (
        <>
        <Myheaderpage/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 cyber-img">
                        <img src={cyber} className="" alt="cyber security tempalte" />
                    </div>
                </div>
            </div>
            <section className="main-1-new-sec">
                <div className="container page-bg">
                    <div className="row conten-2">
                        <div className="col-lg-9 mb-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tab-content course_tab_4" style={{ width: "100%" }}>
                                        <div className="tab-pane active">
                                            <h1><strong>Cyber Security Training</strong></h1>
                                            <p>
                                                Cyber security has become important for companies to help them to save their precious information. This information can either be the confidential documents of a company or its customer's data.
                                                Due to its high demand, many students both freshers and experienced, want to attend and finish their training program. This program helps to enhance the technical expertise and knowledge of individuals and helps them to kick-start their careers.
                                            </p>

                                            <p>So, you may be thinking about where you should enroll to get the best cyber security training in India.
                                                CodeSquadz is one of the leading institutes to provide you with training in cyber security by letting you get training from industry experts.
                                            </p>
                                            <h1><strong>What is Cyber Security?</strong></h1>
                                            <p>Cyber security is the practice of protecting systems, networks, and programs from malicious online attacks. These kinds of attacks,
                                                if successful, can cause a company to lose billions of dollars. Cyber attacks are common nowadays due to the increase in digital usage.
                                                To mitigate or avoid these  attacks, Cyber security is the best available option.
                                            </p>

                                            <p>ompanies are well aware of the potential of cyber security and its demand is continuously increasing.
                                                This has resulted in increasing the demand for cyber security officials.
                                            </p>

                                            <h1><strong>Why Should You Choose Zencode TO get Cyber Security Training?</strong></h1>
                                            <p>CodeSquadz is one of the best IT training centers that provide cyber security training to all students.
                                                This institute helps students so they can become job-ready and start their careers as cyber security officials.
                                                Our training institute stands out for the innovative teaching approach we use to train students.
                                                We provide cyber security training online and offline through our weekend batches and offer various benefits.
                                            </p>
                                            <p>1. Our training is designed by industry experts and this enables students to access the latest technologies and trends.
                                                This ensures that every student should stay ahead in this rapidly evolving IT landscape.</p>
                                            <p>2. Our training focuses on providing updated study materials so students can learn cyber security effectively.
                                                Moreover, this platform enables them to understand technical concepts without any problem.
                                            </p>
                                            <p>3. Our training program focuses on providing students with an opportunity to work on live projects.
                                                This allows them to enhance their learning and take their skills to the next level.</p>
                                            <p>4. Our training program does not only offer a student to study, but it also enables them to prepare for the future.
                                                We have a 100% placement assistance feature to let student kick-start their career.</p>
                                            <p>5. Our training program has doubt-solving sessions so anyone can get
                                                robust clarity about the relevant concepts and the related lessons.
                                            </p>

                                            <h1><strong>Training And Placements</strong></h1>
                                            <p>The Cyber security training program of CodeSquadz is designed specially by industry experts.
                                                This training helps a student become job-ready with the correct skills. This training is led by industry experts with expertise of multiple years. </p>
                                            <p>Once a student enroll in this training program and completes it, then an assured placement support will be provided.
                                                This support will be provided to anyone who completes the training program and is willing to begin their career.</p>
                                            <p>To get additional details about the cyber security training program,
                                                visit our website or get in touch with our academic counsellor by calling on 78-79-22-33-11.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 ">
                            <div className="item mycard ">
                                <div className="carousel-design">
                                    <h4>
                                        <b >
                                            "Cyber Security Training"
                                        </b>
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <img src={Cybersecurity1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ctn-3">
                                    <Link to="/myloginpage" type="button" className="btn btn-info" >Enroll Now</Link>
                                </div>
                            </div>
                            <div className="right-form">
                                <div className="form">
                                    <form className="group-1">
                                        <div className="form-group enquiry-group">
                                            <input type="text" className="form-control" placeholder="First Name" ></input>
                                        </div>
                                        <div className="form-group enquiry-group">
                                            <input type="text" className="form-control" placeholder="Last Name" ></input>
                                        </div>
                                        <div className="form-group enquiry-group">
                                            <input type="email" className="form-control" placeholder="Enter Email"></input>
                                        </div>
                                        <div className="form-group enquiry-group">
                                            <input type="tel" className="form-control" placeholder="Phone Number" autoComplete="off" maxLength={"10"} minLength={"10"}></input>
                                        </div>
                                        <div className="form-group enquiry-group">
                                            <select className='form-control'>
                                                <option className='text-black'>Select Course</option>
                                                <option value="JAVA">JAVA</option>
                                                <option value="J2EE">J2EE</option>
                                                <option value="JAVA FULL STACK">JAVA FULL STACK</option>
                                                <option value="Spring Boot & Microservices">Spring BOOT & Microservices</option>
                                                <option value="Andriod">ANDROID</option>
                                                <option value="Python">PYTHON</option>
                                                <option value="Python Full Stack">PYTHON Full Stack</option>
                                                <option value="Frontend Development">Frontend Development</option>
                                                <option value="Data Science With Python">Data Science With Python</option>
                                            </select>
                                        </div>
                                        <div className="form-group enquiry-group-message">
                                            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="btn contact-submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Myfooterpage/>
        </>


    )
}

export default Cybersecurity