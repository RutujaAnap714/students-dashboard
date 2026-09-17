import '../components/Studentcard.css';

function StudentCard({ student, students, setStudents }) {

  // Delete Student
  const deleteStudent = () => {

    // deleteStudent(student.id);
    const data = students.filter((item) => item.id !== student.id);
     setStudents(data);
  };

  // Favorite Toggle
  const favouriteToggle = () => {
    const data = students.map((item) =>
      item.id === student.id
        ? { ...item, favourite: !item.favourite }
        : item
    );
    setStudents(data);
  };

  // Active / Inactive Toggle
  const statusToggle = () => {
    const data = students.map((item) =>
      item.id === student.id
        ? { ...item, status: item.status === "Active" ? "Inactive" : "Active" }
        : item
    );
    setStudents(data);
  };

  // View Details
  const viewDetails = () => {
    alert(
      `Name : ${student.name}
Email : ${student.email}
Phone : ${student.phone}
Course : ${student.course}
City : ${student.city}
Age : ${student.age}
Percentage : ${student.percentage}%
Skills : ${student.skills}`
    );
  };

  return (
    <div className="student-card">

      <img src={student.img} alt={student.name} />
      <button onClick={favouriteToggle}   style={{
    backgroundColor: "#FDF2F8",
    }}>
        {student.favourite ? "❤️" : "🤍"}
      </button>


      <h2>{student.name}</h2>

      <p><b>Roll :</b> {student.rollNo}</p>
      <p><b>Email :</b> {student.email}</p>
      <p><b>Phone :</b> {student.phone}</p>
      <p><b>Course :</b> {student.course}</p>

      <p><b>Status :</b>{student.status}</p>
       <div className="buttons">
      
      <button onClick={statusToggle}   style={{backgroundColor:"#EDE9FE" ,color:"#6D28D9"}} >
        {student.status ? "Deactivate" : "Activate"}
      </button>

      <button onClick={viewDetails}   style={{backgroundColor:"#DBEAFE" ,color:"#1D4ED8"}}>
        <i class="ri-eye-line"></i>
        View Details
      </button>

      <button onClick={deleteStudent}    style={{backgroundColor:"#FEE2E2",color:"#B91C1C"}}>
        <i class="ri-delete-bin-line"></i>
        Delete
      </button>
</div>
    </div>
  );
}

export default StudentCard;



































































