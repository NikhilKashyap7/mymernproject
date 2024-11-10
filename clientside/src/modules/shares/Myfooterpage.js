import React from 'react'
import logo from '../images/zencode.png';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
function Myfooterpage() {
  return (

    <><footer className='footer'>
      <section className='container '>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div>
                <Link to="/"> <img src={logo} alt="Brand logo" className="brand-logo1" /></Link>
              </div>
              <p className='f-description'>ZenCode, a top-tier IT training institute based in Noida, ensures
                a bright future for both aspiring students & working professionals.
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4 className='f-courses'>Important Courses </h4>
              <div>
                <Link to='' className='course-li'>Java Training</Link>
                <Link to='' className='course-li'>Python Training</Link>
                <Link to='' className='course-li'>Software Testing</Link>
                <Link to='' className='course-li'>ReactJs Training</Link>
                <Link to='' className='course-li'>AngularJs Training</Link>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='f-courses1'></div>
              <div>
                <Link to='' className='course-li'>Mean Stack</Link>
                <Link to='' className='course-li'>Mern Stack</Link>
                <Link to='' className='course-li'>Digital Marketing</Link>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4 className='f-courses'>OFFICE ADDRESS </h4>
              <ul className='address'>
                <div>
                  <p><BusinessIcon /> H 65, Sector 63, Block H</p>
                  <p>Noida,Uttar Pradesh 201301  </p>
                </div>
                <div>
                  <li><Link to='tel:9181716141'><PhoneIcon />9181716141</Link></li>
                  <li><Link to='tel:9181716141'><PhoneIcon />3798471983</Link></li>
                  <li><Link><EmailIcon />enquiry@zencode.com</Link></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className='row row-2'>
            <div className='col-md-3 col-sm-5 '>
              <p className='cop-rgt-p'> "Copyright © 2024 ZenCode."
                <br />
                "All Rights Reserved."
              </p>
            </div>
            <div className='col-md-5 col-sm-7 bottom-pg '>
              <div className='bottom-pg-links'>
                <ul className='d-flex'>
                  <li>
                    <Link to="/aboutus" target='_blank'><span />About Us</Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy"><span></span>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/refundpolicy"> <span></span>Refund Policy</Link>
                  </li>
                  <li>
                    <Link to="/tandc"><span></span>Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/sitemap"><span></span>Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 social-links'>
              <div className='rounded-social-button'>
                <Link className='social-media-button'><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link className='social-media-button'><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link className='social-media-button'><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link className='social-media-button'><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link className='social-media-button'><FontAwesomeIcon icon={faYoutube} /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 git-link'>
          <div>Made With <FontAwesomeIcon className='heart' icon={faHeart} />By Nikhil Kashyap <Link to='https://github.com/NikhilKashyap7/mymernproject' target='_blank'><FontAwesomeIcon icon={faGithub} /></Link></div>
        </div>
      </section>

    </footer>
      <section className='bottom-fixed d-none-xs'>
        <div className='container'>
          <div className='row'>
            
              <div className='bottom-fixed-links'>
                <div className='fixed'>
                  <Link to='/' > Enquire Now</Link>
                </div>
                <div className='fixed'>
                  <Link to='/'> Call us Now</Link>
                </div>
                <div className='fixed'>
                  <Link to='tel:+911122334455'><FontAwesomeIcon icon={faPhone} />1122334455</Link>
                </div>
              </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Myfooterpage