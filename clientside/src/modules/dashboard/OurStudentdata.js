import React from "react";
import Mycustomtable from "./Mycustomtable";
import Myheader from "../shares/Myheaderpage";
function OurStudentdata(){

    return(
        <>
        <Myheader />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <Mycustomtable></Mycustomtable>

                </div>
            </div>



        </div>
        </>
    )
}

export default OurStudentdata