import React from 'react'
import Myheaderpage from '../shares/Myheaderpage'
import Myfooterpage from '../shares/Myfooterpage'
import ssl from '../images/ssl.png';
function Contactpage() {
    return (
        <div>
            <Myheaderpage />

            <div class="container mt-5">
                <div class="text-center mb-4">
                    <h2>To Know More About Courses</h2>
                    <p>Connect To Our Education Expert.</p>
                </div>
                <div class="row">
                    {/* <!-- Left Column: Form --> */}
                    <div class="col-md-6">
                        <div class="form-container">
                            <div class="ssl-secured">
                                <img src={ssl} alt="SSL Secured" width="24" />
                                <span>SSL Secured</span>
                            </div>
                            <form>
                                <div class="form-row ">
                                    <div class="form-group col-md-6">
                                        <label for="firstName">
                                            <i class="form-icon fas fa-user"></i> First Name
                                        </label>
                                        <input type="text" class="form-control" id="firstName" placeholder="First Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="lastName">
                                            <i class="form-icon fas fa-user"></i> Last Name
                                        </label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="email">
                                            <i class="form-icon fas fa-envelope"></i> Email
                                        </label>
                                        <input type="email" class="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">
                                            <i class="form-icon fas fa-phone"></i> Phone Number
                                        </label>
                                        <input type="tel" class="form-control" id="phone" placeholder="Phone Number" maxLength={"10"} minLength={"10"} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="course">
                                        <i class="form-icon fas fa-graduation-cap"></i> Select Course Name*
                                    </label>
                                    <select id="course" class="form-control">
                                        <option selected>Choose...</option>
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
                                <div class="form-group">
                                    <label for="message">
                                        <i class="form-icon fas fa-comments"></i> Tell Us. We Are Listening
                                    </label>
                                    <textarea class="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
                                </div>
                                <button type="submit" class="btn " className='contact-submit'>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>

                    {/* <-- Right Column: Benefits --> */}
                    <div class="col-md-6">
                        <div class="benefits-container">
                            <h3>ZenCode Training Benefits</h3>
                            <div class="row mt-4">
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Experienced Faculty</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Experience Certificate</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">100% Placement Assistance</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Guest Lecture of IT Experts</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Job Oriented Training</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Get Knowledge of AWS</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Online and Offline Classes</div>
                                </div>
                                <div class="col-6 mb-3">
                                    <div class="benefit-card">Comprehensive Learning Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Myfooterpage />
        </div>
    )
}

export default Contactpage