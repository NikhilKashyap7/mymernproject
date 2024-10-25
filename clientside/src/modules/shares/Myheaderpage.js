import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import logo from '../images/zencode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Person4Icon from '@mui/icons-material/Person4';
function Myheaderpage() 
{
      const vusername = useSelector((state)=> state.counter.username);
      const vemail = useSelector((state)=> state.counter.email);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div className="container-fluid ">
      <Link to='/mymainpage'><img src={logo} alt='Company logo' className='brand-logo' /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/"className="nav-link active"  aria-current="page" href="#"><FontAwesomeIcon icon={faHouse} />Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" ><FontAwesomeIcon icon={faLocationDot} />Placement</Link>
          </li>
          <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBook} />
                        Courses
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="Cyber Security">Cyber Security</a></li>
                        <li><a className="dropdown-item" href="Sap">Sap</a></li>
                        <li><a className="dropdown-item" href="Java">Java</a></li>
                        <li><a className="dropdown-item" href="Python">Python</a></li>
                        <li><a className="dropdown-item" href="Software testing">Software Testing</a></li>
                        <li><a className="dropdown-item" href="graphic designing adn video editing">Graphic Designing And Video Editing</a></li>
                        <li><a className="dropdown-item" href="React js">React js</a></li>
                        <li><a className="dropdown-item" href="mean stack">Mean Stack</a></li>
                        <li><a className="dropdown-item" href="mern stack">Mern Stack</a></li>
                        <li><a className="dropdown-item" href="Digital marketing">Digital Marketing </a></li>
                        <li><a className="dropdown-item" href="android">Android</a></li>
                        <li><a className="dropdown-item" href="aws">AWS</a></li>
                        <li><a className="dropdown-item" href="angular js">Angular js</a></li>
                    </ul>
          </li>
          <li><Link to='/myloginpage' className="btn btn-custom me-2"><FontAwesomeIcon icon={faRightToBracket} />Login</Link></li>
          <li><Link to='/ourstudentdata' className="btn btn-custom me-2"><PeopleAltIcon/>Our Student's</Link></li>


        </ul>
        <span style={{display:"block", width:"250px"}}><Person4Icon/> {vusername}</span>
        <form className="d-flex" role="search">
          <button className="btn " type="submit"><AddIcCallIcon/>Conatct Us</button>
          
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Myheaderpage