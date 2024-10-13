import React, { Fragment, useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare}from '@fortawesome/free-solid-svg-icons';
import {faEye}from '@fortawesome/free-solid-svg-icons';
import {faLeftLong}from '@fortawesome/free-solid-svg-icons';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

function Mycustomtable() {
    const [user, setuser] = useState([])
    const getalldata = () =>{
        axios.get("http://localhost:4707/alldata").then((y)=> {
            console.log(y.data);
            setuser(y.data);
        });
    }

    const deletedata = async(id)=>
        {
            const confirmdDelete = window.confirm("Are you sure you want to delete this user data?");
           if (confirmdDelete){
           
            await axios.delete(`http://localhost:4707/deleterecord/${id}`).then((y)=>{
                console.log(y);
                getalldata();
                
            });
        }
        }

    useEffect(()=>{
        getalldata();
    }, [])

    return (
        <Fragment>
            <Link to="/" className="homepage-btn"><FontAwesomeIcon icon={faLeftLong} fade /></Link>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow table-heading">
                            <div className="card-body">
                                <span className="card-title h4">Total Students: {user.length}</span>
                                <span className='h3 c-float'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">MongodbId</th>
      <th scope="col">FullName</th>
      <th scope="col">Email Id</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Gender</th>
      <th scope="col">DOB</th>
      <th scope="col">Course</th>
      
      <th scope="col" className="text-end">Actions</th>
    </tr>
  </thead>
  <tbody>
                {user.map((y) => {
                    return (
                        <tr>
                            <th scope="row">{y._id}</th>
                            <td>{y.fullname}</td>
                            <td>{y.email}</td>
                            <td>{y.phone}</td>
                            <td>{y.gender}</td>
                            <td>{y.dob}</td>
                            <td>{y.course}</td>
                            <td className='text-end'>
                                <Link to={`edituser/`+y._id} className="badge btn edit-btn"><EditIcon/></Link>
                                <button  className="btn badge  delete-btn" onClick={()=>deletedata(y._id)}><DeleteIcon/></button>
                                <Link to={'userview/'+y._id} className="badge  view-btn" ><VisibilityIcon /></Link>
                            </td>
                        </tr>
                    )
                })}
  </tbody>
</table>
        </Fragment>
    )
}

export default Mycustomtable