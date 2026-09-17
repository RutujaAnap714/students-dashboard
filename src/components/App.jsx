import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Dashboard from '../components/Dashboard.jsx'
import Studentform from '../components/Studentform.jsx'
import StudentList from '../components/Studentlist.jsx'
import studentData from "./students";
import "remixicon/fonts/remixicon.css";





 function App() {



  const [students, setStudents] = useState(studentData);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

   return (<>
     <Navbar/>
     <Dashboard students={students} />
     <Studentform  addStudent={addStudent} />
     <StudentList students={students} setStudents={setStudents}/>
     
    </>
  )
 }

export default App