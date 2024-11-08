import React from 'react'
import logo from '../images/zencode.png';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ListItem } from '@mui/material';
function Myfooterpage() {
  return (

    <footer className='footer'>
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
              <div >
                <Link to='' className='course-li'>Java Training</Link>
                <Link to='' className='course-li'>Python Training</Link>
                <Link to='' className='course-li'>Software Testing</Link>
                <Link to='' className='course-li'>ReactJs Training</Link>
                <Link to='' className='course-li'>AngularJs Training</Link>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4 className='f-courses1'></h4>
              <div >
                <Link to='' className='course-li'>Mean Stack</Link>
                <Link to='' className='course-li'>Mern Stack</Link>
                <Link to='' className='course-li'>Digital Marketing</Link>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4 className='f-courses'>OFFICE ADDRESS </h4>
              <ul>
                <div style={{ textAlign: 'left'}}>
                  <p><BusinessIcon /> H 65, Sector 63, Block H</p>
                  <p>Noida,Uttar Pradesh 201301  </p>
                </div>
                <div style={{ textAlign:'left'}}>
                <li><Link to='tel:9181716141'><PhoneIcon />9181716141</Link></li>
                <li><Link to='tel:9181716141'><PhoneIcon />3798471983</Link></li>
                <li><Link><EmailIcon />enquiry@zencode.com</Link></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className='row wow-2'>
        <div className='col-md3 col-sm-5 '>
          <p className='cop-rgt-p'> "Copyright © 2024 ZenCode."
            <br/>
            "All Rights Reserved."
          </p>
        </div>
        <div className='col-md-5 col-sm-7 footer_bottom_dt'>
          <ul className='d-flex'>
            <li>
              <Link to="/aboutus" target='_blank' >About Us</Link>
            </li>
            <li>
              <Link to="/privacypolicy" >Privacy Policy</Link>
            </li>
            <li>
              <Link to="/refundpolicy"> Refund Policy</Link>
            </li>
            <li>
              <Link to="/tandc">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
        <div className='col-lg-4 col-md-12'>
          <div className='rounded-social-button'>
            <Link className='social-media-button'><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link className='social-media-button'><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link className='social-media-button'><FontAwesomeIcon icon={faInstagram}/></Link>
            <Link className='social-media-button'><FontAwesomeIcon icon={faLinkedin}/></Link>
            <Link className='social-media-button'></Link>
            <Link className='social-media-button'></Link>

          </div>
        </div>
      </div>
      </section>
    </footer>
  )
}

export default Myfooterpage