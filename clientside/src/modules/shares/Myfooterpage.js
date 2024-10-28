import React from 'react'
import logo from '../images/zencode.png';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
function Myfooterpage() {
  return (
    <><footer className='footer col-12 container-fluid'>
      <div className='f-description'>
        <img src={logo} alt="Brand logo" className="brand-logo" />
        <p>ZenCode, a top-tier IT training institute based in Noida, ensures
          a bright future for both aspiring students & working professionals.
        </p>
      </div>

      <div className='f-courses'>
        <h4>Important Courses</h4>
        <ul className='courses-li'>
          <ul>
            <li>Python Training</li>
            <li>Java Training</li>
            <li>Software Testing</li>
            <li>ReactJS Training</li>
          </ul>
          <ul>
            <li>AngularJS Training</li>
            <li>MEAN Stack</li>
            <li>MERN Stack</li>
            <li>Digital Marketing Training</li>
          </ul>
        </ul>
      </div>

      <div className='address'>
        <h2>OFFICE ADDRESS</h2>
        <li>
         <BusinessIcon/> H 65, Sector 63, Block H
          Noida,Uttar Pradesh 201301
        </li>
        <li><PhoneIcon/>9038490148</li>
        <li><PhoneIcon/>3798471983</li>
        <li><EmailIcon/>enquiry@zencode.com</li>
      </div>

    </footer>
    <div className='fixed-footer sticky-bottom col-md-12'>
    <button type="button" className="btn footer-btn">Enquire Now</button>   
    <button type="button" className="btn footer-btn">Call Us Now</button>
    <button type="button" className="btn footer-btn">88-99-00-11-22-33</button>


     </div>
    </>
  )
}

export default Myfooterpage