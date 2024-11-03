import React from "react";
import Myheaderpage from "../shares/Myheaderpage";
import Myfooterpage from "../shares/Myfooterpage";
import { Link } from "react-router-dom";
import sapbg from '../images/sapbg.jpg';
import saptraining from '../images/saptraining.jpg';
function sap() {
    return (
        <>
            <Myheaderpage />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 cyber-img">
                        <img src={sapbg} className="" alt="cyber security tempalte" />
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
                                            <h1><strong>SAP Training</strong></h1>
                                            <p>
                                                Best SAP Training Institute with 100% Placement Assistance, Batch Starting from 21st Aug 2024                                            </p>

                                            <h1><strong>About SAP Training</strong></h1>
                                            <p>SAP training in Noida helps provide professionals with the necessary abilities to understand the complexity of SAP,
                                                an integrated platform critical for data management and supporting seamless interactions among unified systems. The
                                                complexities of successful SAP installation require deep knowledge and hands-on experience, which increases the demand
                                                for SAP-trained experts. SAP is known as one of the key hiring opportunities within the IT sector, offering a variety
                                                of jobs, and is famous for its high salary packages. SAP certification courses in Noida enable students to specialize
                                                in various modules, including SAP FICO, ABAP, PM, MM, BASIS, HANA, HR, HCM, and SD.
                                            </p>

                                            <p>The value of SAP training and placement in Noida cannot be understated because it fosters abilities like collaboration,
                                                business analysis, negotiation, project management, and teaching expertise in SAP software. Professionals have more
                                                ability to handle complex issues when they focus on their problem-solving skills.
                                            </p>

                                            <h1><strong>Course Objective</strong></h1>
                                            <p>Join the SAP course in Noida for a complete overview of fundamental to advanced concepts. Expert advice will assist you
                                                in learning SAP courses specifically targeted to particular interests. Prepare for certification examinations and
                                                rewarding jobs in major industries. Notable features of the course include
                                            </p>
                                            <p>1.Training provided by seasoned professionals in the field.</p>
                                            <p>2.Support for securing placements in esteemed industries. </p>
                                            <p>3.Options for weekend, weekday, or fast-track batches to suit diverse schedules.</p>
                                            <p>4.Functional and non-functional modules like SAP BO, SAP ABAP, SAP BI, and more.</p>
                                            <p>5.Real-world experience working on realistic assignments to improve learning
                                            </p>

                                            <h1><strong>Training And Placements</strong></h1>
                                            <p>The SAP training program of CodeSquadz is designed specially by industry experts.
                                                This training helps a student become job-ready with the correct skills. This training is led by industry experts with expertise of multiple years. </p>
                                            <p>Once a student enroll in this training program and completes it, then an assured placement support will be provided.
                                                This support will be provided to anyone who completes the training program and is willing to begin their career.</p>
                                            <p>To get additional details about the cyber security training program,
                                                visit our website or get in touch with our academic counsellor by calling on 78-79-22-33-11.</p>
                                            <h1>Certification</h1>
                                            <p>At CodeSquadz, the top SAP training institute in Noida, you can advance your career with an SAP certification.
                                                Our extensive SAP training courses provide beneficial market knowledge and help you prepare for certification examinations.
                                                Gain job opportunities and become an expert in SAP modules through guided instruction and hands-on experience.
                                                Our integrated approach guarantees comprehensive growth, giving you the tools to succeed in SAP positions.
                                                With the SAP training and placement we provide at CodeSquadz, you will be able to differentiate yourself in the competitive job market.
                                                Enroll in our reputed SAP training program in Noida to start your journey to success in your career. Select CodeSquadz for SAP certification and training along with assistance in finding work.
                                                </p>
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
                                            <img src={saptraining} alt="" />
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
            <Myfooterpage />
        </>

    )
}
export default sap