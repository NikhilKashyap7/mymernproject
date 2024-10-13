import React from 'react'
import logo from '../images/zencode.png'
function Myfooterpage() {
  return (
    <footer className='footer col-12 container-fluid'>
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
H 65, Sector 63, Block H
Noida,Uttar Pradesh 201301
</li>
<li>9038490148</li>
<li>3798471983</li>
<li>enquiry@zencode.com</li>
      </div>
    </footer>
  )
}

export default Myfooterpage