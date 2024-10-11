import React from 'react'
import { Link } from 'react-router-dom'
function Myerrorpage() {
  return (
    <div className='container'>
    <div className='row'>
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
            <Link to="/" className='btn btn-danger'>Back to Home page</Link>
        </div>
        
    </div>

   </div>
  )
}

export default Myerrorpage