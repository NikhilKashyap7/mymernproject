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
function Myheaderpage() 
{
      const vusername = useSelector((state)=> state.counter.username);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div className="container-fluid ">
      <Link to='/'><img src={logo} alt='Company logo' className='brand-logo' /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/"className="nav-link active"  aria-current="page" href="#"><FontAwesomeIcon className='fa-icons' icon={faHouse} />Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/myplacement' className="nav-link active" ><FontAwesomeIcon className='fa-icons'icon={faLocationDot} />Placement</Link>
          </li>
          <li className="nav-item dropdown">
                    <Link className="nav-link active dropdown-toggle "  id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBook} className='fa-icons'/>
                        Courses
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/cybersecurity">Cyber Security</Link></li>
                        <li><Link className="dropdown-item" to="/sap">Sap</Link></li>
                        <li><Link className="dropdown-item" to="/java">Java</Link></li>
                        <li><Link className="dropdown-item" to="/python">Python</Link></li>
                        <li><Link className="dropdown-item" to="/softwaretesting">Software Testing</Link></li>
                        <li><Link className="dropdown-item" to="/graphicdesign">Graphic Designing And Video Editing</Link></li>
                        <li><Link className="dropdown-item" to="/reactjs">React js</Link></li>
                        <li><Link className="dropdown-item" to="/meanstack">Mean Stack</Link></li>
                        <li><Link className="dropdown-item" to="/mern stack">Mern Stack</Link></li>
                        <li><Link className="dropdown-item" to="/digitalmarketing">Digital Marketing </Link></li>
                        <li><Link className="dropdown-item" to="/android">Android</Link></li>
                        <li><Link className="dropdown-item" to="/aws">AWS</Link></li>
                        <li><Link className="dropdown-item" to="/angularjs">Angular js</Link></li>
                    </ul>
          </li>
          <li><Link to='/myloginpage' className="nav-link active me-2"><FontAwesomeIcon icon={faRightToBracket}className='fa-icons' />Login</Link></li>
          <li><Link to='/ourstudentdata' className="nav-link active me-2"><PeopleAltIcon/>Our Student's</Link></li>


        </ul>
        <span style={{display:"block", width:"250px"}}> {vusername}</span>
        <form className="d-flex" role="search">
        <Link to="/contactus " className="btn nav-link active">
          <AddIcCallIcon/>Conatct Us
          </Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Myheaderpage