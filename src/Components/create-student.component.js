// CreateStudent Component for add new student

// Import Modules
import axios from "axios";
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
  const formValues ={
    name: "",
    email: "",
    rollno: "",
  };
  // onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => {
        if (res.status === 200) alert("Student successfully created");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Student
    </StudentForm>
  );
};

// Export CreateStudent Component
export default CreateStudent;
