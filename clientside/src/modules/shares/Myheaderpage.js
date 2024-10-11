import React from 'react'
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/zencode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
function Myheaderpage() 
{
    
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);}
        
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid ">
      <Link to='/Mymainpage'><img src={logo} className='brand-logo' /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faHouse} />Home</a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#"><FontAwesomeIcon icon={faLocationDot} />Placement</Link>
          </li>
          <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBook} />
                        Courses
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Cyber Security</a></li>
                        <li><a class="dropdown-item" href="#">Sap</a></li>
                        <li><a class="dropdown-item" href="#">Java</a></li>
                        <li><a class="dropdown-item" href="#">Python</a></li>
                        <li><a class="dropdown-item" href="#">Software Testing</a></li>
                        <li><a class="dropdown-item" href="#">Graphic Designing And Video Editing</a></li>
                        <li><a class="dropdown-item" href="#">React js</a></li>
                        <li><a class="dropdown-item" href="#">Mean Stack</a></li>
                        <li><a class="dropdown-item" href="#">Mern Stack</a></li>
                        <li><a class="dropdown-item" href="#">Digital Marketing </a></li>
                        <li><a class="dropdown-item" href="#">Android</a></li>
                        <li><a class="dropdown-item" href="#">AWS</a></li>
                        <li><a class="dropdown-item" href="#">Angular js</a></li>
                    </ul>
          </li>
          <li><Link to='/Myloginpage' class="btn btn-custom me-2"><FontAwesomeIcon icon={faRightToBracket} />Login</Link></li>
          <li><Link to='/ourstudentdata' class="btn btn-custom me-2">Our Student's</Link></li>


        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Myheaderpage