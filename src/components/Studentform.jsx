import React, { useState } from "react";
import "../components/Studentform.css";

function Studentform({ addStudent }) {

  const [student, setStudent] = useState({
    id: "",
    name: "",
    rollNo: "",
    email: "",
    phone: "",
    course: "",
    city: "",
    age: "",
    percentage: "",
    skills: "",
    status: "Active",
    favourite: false,
    img: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent({
      ...student,
      id: Date.now()
    });

    setStudent({
      id: "",
      name: "",
      rollNo: "",
      email: "",
      phone: "",
      course: "",
      city: "",
      age: "",
      percentage: "",
      skills: "",
      status: "Active",
      favourite: false,
      img: ""
    });
  };

  return (
    <>
      <div className="search">
        <input type="text" placeholder=" 🔍 Search by name" />
      </div>

      <div className="studentform">
        <h1>📋Student Details</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="👤Student Name"
            value={student.name}
            onChange={handleChange}
          />
          

           <input   
            type="number"
            name="rollNo"
            placeholder="🪪Roll No"
            value={student.rollNo}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="✉️Email"
            value={student.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="📞Phone"
            value={student.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="course"
            placeholder="📚Course"
            value={student.course}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="📍City"
            value={student.city}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="🎂Age"
            value={student.age}
            onChange={handleChange}
          />

          <input
            type="number"
            name="percentage"
            placeholder="%Percentage"
            value={student.percentage}
            onChange={handleChange}
          />
          <input
  type="text"
  name="img"
  placeholder="🖼️Image URL"
  value={student.img}
  onChange={handleChange}
/>

          <button type="submit"  style={{backgroundColor:"#DBEAFE" ,color:"#1D4ED8"}}>➕Add Student</button>

        </form>
      </div>
    </>
  );
}

export default Studentform;































































































// import React, { useState } from 'react'
// import '../components/Studentform.css'


// function Studentform({addStudent}) {



// const handleSubmit = (e) => {
//   e.preventDefault();

//   const handleChange = (e) => {
//   setStudent({
//     ...student,
//     [e.target.name]: e.target.value,
//   });


//   const [student, setStudent] = useState({
//   id: 1,
//   name: "",
//   rollNo: "",
//   email: "",
//   phone: "",
//   course: "",
//   city: "",
//   age: "",
//   percentage: "",
//   skills: "",
//   status: "Active",
//   favourite: false,
//   img: ""
// });

// };


// };




//   return (
//     <>
//     <div className="search">
//       <input type="text"  placeholder='search by name'/>
//     </div>
//     <div className="studentform">
//         <h1>Student Details</h1>
//     <form onSubmit={handleSubmit}>
//     <input type=" text" name='name' placeholder='Student name'  value={student.name}
//   onChange={handleChange} />
//     <input type="number" name='rollNo' placeholder='rollno'  value={student.rollNo}
//   onChange={handleChange}/>
//     <input type="email" name='email' placeholder='Email'  value={student.email}
//   onChange={handleChange}/>
//     <input type="number" name='phone' placeholder='phone'  value={student.phone}
//   onChange={handleChange}/>
//     <input type="text" name='course' placeholder='Course'  value={student.course}
//   onChange={handleChange}/>
//     <input type="text" name='city' placeholder='city'  value={student.city}
//   onChange={handleChange}/>
//     <input type="number" name='age' placeholder='Age'  value={student.age}
//   onChange={handleChange}/>
//     <input type="text" name='percentage' placeholder='percentage'  value={student.percentage}
//   onChange={handleChange}/>
   
// <button type="submit">Add Student</button>
// </form>
// </div>
//     </>
//   );
// }

// export default Studentform


