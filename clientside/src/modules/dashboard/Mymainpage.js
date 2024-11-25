import React, { Fragment, useState, useEffect, useRef } from "react";
import carimg1 from '../images/web-feature.jpg'
import carimg2 from '../images/website-development-process-scaled.jpg'
import Myfooterpage from "../shares/Myfooterpage";
import Modal from "../shares/Coursemodal";
import Cardcarousel from "../shares/Cardcarousel";

//Course data for the main page 
const courseData = [
  { image: "java-course.png", title: "Java", description: "Transform your development journey with Java—build robust, platform-independent applications that power the world's software!" },
  { image: "python.png", title: "Python", description: "Discover endless possibilities with Python—craft clean, efficient code for web development, data science, and beyond!" },
  { image: "reactjs.png", title: "React JS", description: "Unlock the power of interactive web applications with React JS—where building dynamic user interfaces meets unmatched performance and flexibility!" },
  { image: "data-science.png", title: "Data Science", description: "Unlock insights and drive innovation with data science—harness the power of data to make informed decisions and shape the future!" },
  { image: "graphic.png", title: "Graphic & Video", description: "Elevate your creativity with graphic design—transform ideas into stunning visuals that captivate and inspire!" },
  { image: "mern-logo.png", title: "Mern", description: "Revolutionize your web development with the MERN stack—build powerful, full-stack applications using MongoDB, Express, React, and Node.js!" },

];

//Additional course data for another section
const courseData1 = [
  { image: "mean.png", title: "Mean", description: "Empower your web projects with the MEAN stack—create dynamic applications using MongoDB, Express, Angular, and Node.js for seamless performance!" },
  { image: "angularjs.png", title: "Angular js", description: "Supercharge your web applications with AngularJS—craft dynamic, responsive user interfaces that deliver exceptional performance and user experience!" },
  { image: "digital-marketing.png", title: "Digital Marketing", description: "Transform your brand's reach with digital marketing—connect, engage, and grow your audience in the digital landscape!" },
  { image: "spring.png", title: "Spring", description: "Accelerate your Java development with Spring—build robust, scalable applications with ease and flexibility!" },
  { image: "cyber-security-icon.png", title: "Cyber Security", description: "Protect your digital world with cybersecurity—safeguard your data, secure your networks, and stay one step ahead of threats!" },
  { image: "aws-icon.png", title: "AWS", description: "Elevate your infrastructure with AWS—harness the power of cloud computing to innovate, scale, and transform your business!" },

]

function Mymainpage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // state to manage modal visibility
  const [modalContent, setModalContent] = useState(""); // state to hold content for the modal

  // Open modal with selected course description
  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);//open the modal
  };

  // Function to Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  //state to manage the current slide index
  const [slider, setSlider] = useState(0);
  const data = [
    { image: carimg1, buttonText: "More details..." }, //Slider data with images and button text
    { image: carimg2, buttonText: "Book Appoinment" },
  ];

  // Function to change the slide based on index
  const getSlide = (index) => {
    setSlider(index);// set the slider index
  };

  //useEffect to automatically change the slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevIndex) => (prevIndex + 1) % data.length); //update slider index
    }, 7000);

    return () => clearInterval(interval); // clear the interval on cimponent unmount
  }, [data.length]);

  const handleButtonClick = () => {
    // Placeholder for button click functionality (not implemented)

  };


  const [visibleSections, setVisibleSections] = useState({
    para1: false,
    para2: false,
    para3: false,
  });

  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prevState) => ({
              ...prevState,
              [entry.target.id]: true, // Make visible when in view
            }));
          } else {
            setVisibleSections((prevState) => ({
              ...prevState,
              [entry.target.id]: false, // Hide when out of view
            }));
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Observe each paragraph
    if (para1Ref.current) observer.observe(para1Ref.current);
    if (para2Ref.current) observer.observe(para2Ref.current);
    if (para3Ref.current) observer.observe(para3Ref.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <Fragment>
      {/* Slide Section */}
      <div className="slider">
        <div className="slider-img">
          <img
            className="carousel-img"
            src={data[slider].image}
            alt={`Slide ${slider + 1}`}
            style={{ width: "100%", height: "100vh" }} />
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

      {/* Information Section */}
      <div id="para1"
        ref={para1Ref}
        className={`para-1 col-md-12 ${visibleSections.para1 ? 'visible' : ''}`}>
        <h3>Best IT Training Institute with 100% Placement Assistance</h3>
        <p>
          ZenCode is a premium institute that offers professional education to those seeking to pursue their career in IT. In addition, we offer specialized training programs in various fields, including JAVA (Core, Advance, and Core with Advance), Mern-stack, Mean-stack, PHP, Android, iOS, Digital Marketing, Python, and AI/ML for improving IT skills of our students. At ZenCode, we encourage students and existing professionals alike to start and reach greater heights in their IT careers. As a result, our students are attaining higher positions in the IT industry and achieving various milestones.<br /><br />
          At ZenCode, we have a team of industry experts with extensive experience to enhance one's subject knowledge and shape the future of our students. Our experts provide professional education to our students with a practical approach to learning and mastering complex IT concepts. Furthermore, all our IT training programs are available at a competitive price, enabling students to enroll at ZenCode without worrying about its fees.
        </p>
      </div>
      <div  id="para2"
        ref={para2Ref}
        className={`para-2 col-md-12 ${visibleSections.para2 ? 'visible' : ''}`}>
        <h3>Why ZenCode?</h3>
        <p>
          Getting an entry-level job in an IT company is not easy. It depends on various factors, including skills, educational qualifications, and current demand for IT jobs. The competition for these entry-level jobs in an IT company is also fierce. Here, choosing CodeSquadz is ideal because it allows you to enroll for industrial training under the guidance of an industry expert and assured placement support.
          <br /><br />

          Securing a job in today's competitive age is not easy, and CodeSquadz works 24/7 to enable you to get a job. We offer 100% placement support and a course completion certificate that helps you to kick-start your journey as a successful IT professional. In addition, we will help you become job-ready and prepare you to crack tech interviews with theoretical and practical knowledge of any programming language.
          <br /><br />

          You'll be able to enhance your career or commence it with our offline and online IT training. It will impart technical skills and prepare you to enter the IT industry. Moreover, updated study materials, IT training on live projects, and weekday & weekend batches also make CodeSquadz a better choice.
        </p>
      </div>
      <div id="para3"
        ref={para3Ref}
        className={`para-3 col-md-12 ${visibleSections.para3 ? 'visible' : ''}`}>
        <h3>Advance IT Training By Industry Experts</h3>
        <p>CodeSquadz provides career-oriented IT training on live projects from industry experts to level up your IT career through new-age tech skills.
        </p>
      </div>

      {/* Course card Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 course-card" >
            {courseData.map((course, index) => (
              <div class="card"
                key={index}
                onClick={() => handleOpenModal(course.description)}>
                <img src={require(`../images/${course.image}`)} class="card-img-top" alt={course.title} />
                <div class="card-body">
                  <h6 className="card-title cardtext">{course.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-12 course-card" >
            {/* Renders cards for the second set of courses */}
            {courseData1.map((course, index) => (
              <div class="card"
                key={index}
                onClick={() => handleOpenModal(course.description)} >
                <img src={require(`../images/${course.image}`)} class="card-img-top" alt={course.title} />
                <div class="card-body">
                  <h6 className="card-title cardtext">{course.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Used Bootstrap Modal for displaying course details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
      <h2 style={{ textAlign: "center" }}>Our Placed Students</h2>
      <Cardcarousel />
      <Myfooterpage />
    </Fragment>
  )
}


export default Mymainpage