
import React, { useState } from "react";
import '../components/board.css'
function Dashboard({students}) {
 const total = students.length;

  const active = students.filter((s) => s.status === "Active").length;

  const inactive = students.filter((s) => s.status === "Inactive").length;

  const favourite = students.filter((s) => s.favourite).length;

  return (
    <>
    <div className="board">
        <div className="cards" style={{backgroundColor:"#EAF6FF"}}>
           <div className="left">
            {/* <img src="https://png.pngtree.com/png-clipart/20230816/original/pngtree-education-logo-template-vector-concept-student-graphic-vector-picture-image_10906373.png" alt="" /> */}
            <img src="student.png" alt="loading" />
           
           </div>
           <div className="right">
            <h1>Total Students</h1>
            <h2>{total}</h2>
           </div>
             
        </div>
        <div className="cards" style={{backgroundColor:"#DCFCE7"}}>
           <div className="left">
            <img src="activestudent.png" alt="loading" />
            {/* <img src="https://static.vecteezy.com/system/resources/previews/028/126/144/large_2x/education-logo-template-vector.jpg" alt="" /> */}
           </div>
           <div className="right">
            <h1>Active</h1>
            <h2>{active}</h2>
           </div>
        </div>
        <div className="cards" style={{backgroundColor:"#FEE2E2"}}>
           <div className="left">
            <img src="Inactive.png" alt="loading" />
            {/* <img src="https://static.vecteezy.com/system/resources/previews/035/116/584/large_2x/inactive-concept-line-icon-simple-element-illustration-inactive-concept-outline-symbol-design-vector.jpg" alt="" /> */}
           </div>
           <div className="right">
            <h1>Inactive </h1>
            <h2>{inactive}</h2>
           </div>
        </div>
        <div className="cards" style={{backgroundColor:"#FEF3C7"}}>
            <div className="left">
               <img src="Favourite.png" alt="loading" />
            {/* <img src="https://thumbs.dreamstime.com/z/outline-favorite-vector-icon-isolated-black-simple-line-element-illustration-customer-service-concept-editable-stroke-144299967.jpg" alt="" /> */}
           </div>
           <div className="right">
            <h1>Favourite</h1>
            <h2>{favourite}</h2>
           </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard