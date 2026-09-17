import StudentCard from "./Studentcard";

function StudentList({ students, setStudents }) {
  return (
    <div className="student-list">

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          students={students}
          setStudents={setStudents}
        />
      ))}

    </div>
  );
}

export default StudentList;





















// import StudentCard from "./StudentCard";

// function StudentList({ students }) {
//   return (
//     <div className="student-list">

//       {students.map((student) => (
//         <StudentCard
//           key={student.id}
//           student={student}
//         />
//       ))}

//     </div>
//   );
// }

// export default StudentList;