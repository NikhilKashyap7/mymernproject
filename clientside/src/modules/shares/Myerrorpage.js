import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import Myheaderpage from './Myheaderpage';
function Myerrorpage() {
  return (

    <div className=' navbar-expand-lg'>
      <Myheaderpage/>
      <div className='row error-pg'>
        <div className='col text-center'>
          <div className='col-12 row justify-content-center'>
            <div className="head ">
              <div className="eyes">
                <span className="eye"></span><span className="eye"></span>
              </div>
            </div>
          </div>
          <h1 className='c-header'>404</h1>
          <h4>Page Not Found </h4>
          <p><b>The page you are looking more might have beeen removede had its name changed or is temporarily unavailable.</b></p>
         <div> <Link to="/" className='btn error-pg-btn'>Home page</Link></div>
         <FontAwesomeIcon className='right-appoint' icon={faHandPointUp} beatFade />
        </div>

      </div>

    </div>
  )
}

export default Myerrorpage