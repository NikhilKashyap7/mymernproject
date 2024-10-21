import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Myapi from "../shares/Myapi";

function Userdataview (){
    
    const {id} = useParams();

    const [userdetail,userset]=useState({})

    const singleuser= ()=>{
        axios.get(`${Myapi}/singleuser/${id}`).then((y)=>{
            console.log(y);
            userset(y.data);
        })
    }

    useEffect(()=>{
        singleuser();
    },[]);
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Your are viewing single data of user</h1>
                </div>

                <div className="col-12">
                    <h2> User Id: {userdetail._id}</h2>
                    <p> Name: {userdetail.fullname}</p>
                    <p> Gender: {userdetail.gender}</p>
                    <p> E.mail: {userdetail.email}</p>
                    <p> Phone no.: {userdetail.phone}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Userdataview