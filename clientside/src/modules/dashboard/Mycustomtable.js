import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Myapi from "../shares/Myapi";
import jsPDF from "jspdf";
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';

function Mycustomtable() {
    //state To hold user data
    const [user, setuser] = useState([]);

    //function to fetcch all user data from the API
    const getalldata = () => {
        axios.get(`${Myapi}/alldata`).then((y) => {
            // console.log(y.data);
            //Update state with the fetched user data
            setuser(y.data);
        });
    }

    //Function to delete a user by their ID
    const deletedata = async (id) => {
        const confirmdDelete = window.confirm("Are you sure you want to delete this user data?");
        if (confirmdDelete) {
            //Making an API call to delte the user data
            await axios.delete(`${Myapi}/deleterecord/${id}`).then((y) => {
                // console.log(y);
                //Afetr deleting, fetching updated user data
                getalldata();

            });
        }
    };


    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("User Data Table", 14, 10);

        // Defines the columns and rows
        const columns = ["MongodbId", "FullName", "Email Id", "Phone No.", "Gender", "DOB", "Course"];
        const rows = user.map((y) => [y._id, y.fullname, y.email, y.phone, y.gender, y.dob, y.course]);

        // Added autoTable to the document
        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 20,
            theme: 'grid',
            headStyles: { fillColor: [22, 160, 133] }, // Customize header color
        });

        doc.save("user_data.pdf");
    };

    const printTable = () => {
        window.print();
    };
    //Uses useEffect to get user data when the component first loads
    useEffect(() => {
        getalldata();
    }, [])

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow table-heading">
                            <div className="card-body">
                                {/* Display total number of users */}
                                <span className="card-title h4">Total Students: {user.length}</span>
                                
                            </div>
                    
                        </div>
                   
                    </div>
                 
                </div>
                <div className="d-flex justify-content-end">
                <button className="btn btn-primary mx-2 btn-comment" onClick={downloadPDF}><DownloadIcon/></button>
                 <button className="btn btn-secondary btn-comment1" onClick={printTable}><PrintIcon/></button>
             </div>
            </div>
            
{/*Here's the table to display user data */}
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
                    {/* Mapping through the user data to create table rows*/}
                    {user.map((y) => {
                        return (
                            <tr key={y._id}>
                                <th scope="row">{y._id}</th>
                                <td>{y.fullname}</td>
                                <td>{y.email}</td>
                                <td>{y.phone}</td>
                                <td>{y.gender}</td>
                                <td>{y.dob}</td>
                                <td>{y.course}</td>
                                <td className='text-end'>
                                    {/*Added action buttons for editing, deleting, and viewing user data */}
                                    <Link to={`edituser/` + y._id} className="badge btn edit-btn"><EditIcon /></Link>
                                    <button className="btn badge  delete-btn" onClick={() => deletedata(y._id)}><DeleteIcon /></button>
                                    <Link to={'userview/' + y._id} className="badge  view-btn" ><VisibilityIcon /></Link>
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