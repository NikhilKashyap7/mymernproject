import React from 'react'
import Myheaderpage from './Myheaderpage';
import placement from '../images/placement.jpg';
import Cardcarousel from './Cardcarousel';
import Slider from 'react-slick';
import Myfooterpage from './Myfooterpage';
import contact from '../images/contactus.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
const companies = [
  {
    img: require('../images/addverb.png')
  },
  {
    img: require('../images/triazine.png')
  },
  {
    img: require('../images/jellyfish.png')
  },
  {
    img: require('../images/ar-software.png')
  },
  {
    img: require('../images/birlasoft.png')
  },
  {
    img: require('../images/appsquadz-software.png')
  }
]

const companies2 = [
  {
    img: require('../images/moptra.png')
  },
  {
    img: require('../images/telecom-system.png')
  },
  {
    img: require('../images/trackobit.png')
  },
  {
    img: require('../images/rezo-ai.png')
  },
  {
    img: require('../images/traviyo.png')
  }
]
function Myplacement() {


  const settings = {
    className: "center",
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };
  const settings2 = {
    className: "center",
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  return (
    <>
      <Myheaderpage />
      <div>
        <img src={placement} alt='placement written' className='placement' />
      </div>
      <div>
        <h2 className='place-heading'>Placed Students</h2>
      </div>
      <Cardcarousel />

      <div>
        <h2 className='place-heading'>Our Alumni work in Top Companies </h2>
      </div>


      <div style={{ width: "80%", height: "120px", margin: "auto", marginTop: "20px", marginBottom: "20px" }}>
        <div>
          <Slider {...settings}>
            {companies.map((d, index) => (
              <>

                <div key={index} className="card-img" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "white", paddintRight: "20px", borderRadius: "5px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}>

                  <img src={d.img} alt={d.name} style={{ height: "100px", width: "200px" }} />

                </div>

              </>
            ))}
          </Slider>
        </div>
      </div>


      <div style={{ width: "80%", height: "120px", margin: "auto", marginTop: "20px", marginBottom: "20px" }}>
        <div>
          <Slider {...settings2}>
            {companies2.map((d, index) => (
              <>

                <div key={index} className="card-img" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "white", paddintRight: "20px", borderRadius: "5px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}>

                  <img src={d.img} alt={d.name} style={{ height: "100px", width: "200px" }} />

                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <section className='query-box'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>
            <h2 className='text-center query-heading'>
              "Have Placement queries? Get Answere(s) From The" <br />
              "Placement Head of Zencode"
            </h2>
          </div>

          <div className='row mr'>
            <div className='container form-content'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='contactimage'>
                        <img src={contact} alt='contact us' className='img-fluid' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='info'>
                        <div className='info-icon'>
                          <LocalPhoneIcon />
                        </div>
                        <div className='info-content'>
                          <p>Call or Whatsapp Us At</p>
                          <Link to="tel:+91-1122334455" tabIndex={-1}>+91- 1122334455</Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='info'>
                        <div className='info-icon'>
                          <EmailIcon />
                        </div>
                        <div className='info-content'>
                          <p>Email Us at</p>
                          <Link to="mailto:enquiry@zencode.com" tabIndex="-1">enquiry@zencode.com</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <form  className='FormContainer courseFormContainer' >
                    <div className='row'>
                      <div className="col-lg-6">
                        <div className='form-group'>
                          <input type='text' className='form-control' placeholder='Enter name' name='sName' autoComplete='off' />
                          <span className='error'></span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className='form-group'>
                          <input type='text' className='form-control' placeholder='Enter Company' name='sName' autoComplete='off' />
                          <span className='error'></span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className='form-group'>
                          <input type='email' className='form-control' placeholder='Enter email' name='sName' autoComplete='off' />
                          <span className='error'></span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className='form-group'>
                          <input type='date' className='form-control' placeholder='Date' name='sName' autoComplete='off' />
                          <span className='error'></span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className='form-group'>
                          <input type='text' className='form-control' placeholder='Enter mobile' name='sName' autoComplete='off' />
                          <span className='error'></span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className='form-group'>
                          <select className='form-select course_names' id="inputState" autoComplete='off'>
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
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group mb-3'>
                          <textarea className='form-control message' rows="3" placeholder="Enter message (Max-length 200 Characters)" autoComplete='off'></textarea>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <button type="submit" className='btn btn-danger'>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Myfooterpage />
    </>
  )
}

export default Myplacement