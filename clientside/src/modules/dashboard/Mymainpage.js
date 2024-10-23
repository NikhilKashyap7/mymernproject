import React, { Fragment, useState, useEffect } from "react";
import carimg1 from '../images/web-feature.jpg'
import carimg2 from '../images/website-development-process-scaled.jpg'
import Myfooterpage from "../shares/Myfooterpage";
import java from "../images/java-course.png";
import python from "../images/python.png";
import reactjs from "../images/reactjs.png";
import dscience from "../images/data-science.png";
import graphic from "../images/graphic.png";
import mern from "../images/mern-logo.png";
import mean from "../images/mean.png";
import angular from "../images/angularjs.png";
import digital from "../images/digital-marketing.png";
import fullstack from "../images/spring.png";
import cyber from "../images/cyber-security-icon.png";
import aws from "../images/aws-icon.png";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';;
function Mymainpage(){
    const [slider, setSlider] = useState(0);
  const data = [
    { image: carimg1, buttonText: "More details..."},
    { image: carimg2, buttonText: "Book Appoinment"},
  ];

  const getSlide = (index) => {
    setSlider(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevIndex) => (prevIndex + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleButtonClick = () => {
   
  };
    return(
        <Fragment>
        <div className="slider">
          <div className="slider-img">
            <img
              src={data[slider].image}
              alt={`Slide ${slider + 1}`}
              style={{ width: "100%", height: "100vh" }}/>
            <button className="slider-button" onClick={handleButtonClick}>
              {data[slider].buttonText}
            </button>
            <div className="slider-btn">
              {data.map((_, index) => (
                <div
                  key={index}
                  className={`s-btn ${slider === index ? 'active' : ''}`}
                  onClick={() => getSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
{/*   
        <div id="mySidenav" class="sidenav">
  <a href="#" id="blog"><PhoneForwardedIcon/></a>
</div> */}

        <div className="para-1">
          <h3>Best IT Training Institute with 100% Placement Assistance</h3>
          <p>
          ZenCode is a premium institute that offers professional education to those seeking to pursue their career in IT. In addition, we offer specialized training programs in various fields, including JAVA (Core, Advance, and Core with Advance), Mern-stack, Mean-stack, PHP, Android, iOS, Digital Marketing, Python, and AI/ML for improving IT skills of our students. At ZenCode, we encourage students and existing professionals alike to start and reach greater heights in their IT careers. As a result, our students are attaining higher positions in the IT industry and achieving various milestones.<br/><br/>
  At ZenCode, we have a team of industry experts with extensive experience to enhance one's subject knowledge and shape the future of our students. Our experts provide professional education to our students with a practical approach to learning and mastering complex IT concepts. Furthermore, all our IT training programs are available at a competitive price, enabling students to enroll at ZenCode without worrying about its fees.
          </p>
        </div>
        <div className="para-2">
          <h3>Why ZenCode?</h3>
          <p>
          Getting an entry-level job in an IT company is not easy. It depends on various factors, including skills, educational qualifications, and current demand for IT jobs. The competition for these entry-level jobs in an IT company is also fierce. Here, choosing CodeSquadz is ideal because it allows you to enroll for industrial training under the guidance of an industry expert and assured placement support.
  <br/><br/>
  
  Securing a job in today's competitive age is not easy, and CodeSquadz works 24/7 to enable you to get a job. We offer 100% placement support and a course completion certificate that helps you to kick-start your journey as a successful IT professional. In addition, we will help you become job-ready and prepare you to crack tech interviews with theoretical and practical knowledge of any programming language.
  <br/><br/>
  
  You'll be able to enhance your career or commence it with our offline and online IT training. It will impart technical skills and prepare you to enter the IT industry. Moreover, updated study materials, IT training on live projects, and weekday & weekend batches also make CodeSquadz a better choice.
          </p>
        </div>


        <div className="para-3">
            <h3>Advance IT Training By Industry Experts</h3>
            <p>CodeSquadz provides career-oriented IT training on live projects from industry experts to level up your IT career through new-age tech skills.
            </p>
            

        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <section className="course-card">
          
          <div class="card">
    <img src={java} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">JAVA</h6>
    </div>
  </div>
  
  <div class="card">
    <img src={python} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Python</h6>
    </div>
  </div>
  
  <div class="card">
    <img src={reactjs} class="card-img-top" alt="React Logo"/>
    <div class="card-body">
      <h6 class="card-title">React JS</h6>
    </div>
  </div>
  
  
  <div class="card">
    <img src={dscience} class="card-img-top" alt="Data Science Logo"/>
    <div class="card-body">
      <h6 class="card-title">Data Science</h6>
    </div>
  </div>
  
  
  <div class="card">
    <img src={graphic} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Graphic & Video</h6>
    </div>
  </div>
  
  
  <div class="card">
    <img src={mern} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Mern</h6>
    </div>
  </div>
  </section>
  
  <section className="course-card">
<div class="card">
  <img src={mean} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Mean</h6>
  </div>
</div>

<div class="card">
  <img src={angular} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Angular JS</h6>
  </div>
</div>

<div class="card">
  <img src={digital} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Digital Marketing</h6>
  </div>
</div>


<div class="card">
  <img src={fullstack} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Full Stack QA</h6>
  </div>
</div>


<div class="card">
  <img src={cyber} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Cyber Security</h6>
  </div>
</div>


<div class="card">
  <img src={aws} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">AWS</h6>
  </div>
</div>


</section>
  
            </div>
          </div>
        </div>

        

        <Myfooterpage/>
      </Fragment>
    )
}


export default Mymainpage