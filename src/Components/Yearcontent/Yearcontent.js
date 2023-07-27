import React from "react";
var Dateyear=()=>{
    var showdate=new Date();
    var displaytodaysyear=showdate.getFullYear()
    return(
        <>
         <p>© Copyright <span id="year"  readOnly="true">{displaytodaysyear}</span> All Right Reserved - Kitkat Software Technologies</p>
        </>
    )
} 
export default Dateyear;