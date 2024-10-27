import React from "react";
import Mycustomtable from "./Mycustomtable";
import Myheader from "../shares/Myheaderpage";
import CourseChart from "../shares/Mychartdata";

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
        <div>
            <h1>This is chart data of students
            </h1>
                <CourseChart />
            </div>
        </>
    )
}

export default OurStudentdata