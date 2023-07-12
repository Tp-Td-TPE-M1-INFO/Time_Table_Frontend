import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCreateUEMutation } from "../../../../redux/api";
import { Tag, DriveFileRenameOutlineRounded } from "@mui/icons-material";

import "./style.css";
import Entry from "../../../../components/Entry";
import FormValidation from "../../../../components/FormValidation";

import { useDispatch } from "react-redux";
import { getAllUE } from "../../../../redux/slices/UESlice";
import axios from "../../../../axios";

export const UpdateteacherForm = (props) => {
  const dispatch = useDispatch();
  const studentId = props.studentInfo._id;

  // States for registration
  const [name, setName] = useState(props.studentInfo.name);
  const [registerNumber, setRegisterNumber] = useState(
    props.studentInfo.registerNumber
  );
  const [surname, setSurName] = useState(props.studentInfo.surname);
  const [email, setEmail] = useState(props.studentInfo.email);
  // const [password, setPassword] = useState('')
  const [createUE] = useCreateUEMutation();

  // State when loading
  const [isLoading, setIsLoading] = useState(false);

  // Handling changes
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMatricule = (e) => {
    setRegisterNumber(e.target.value);
  };
  const handleSurName = (e) => {
    setSurName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const generateError = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  const generateSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (name === "" || surname === "") {
      if (name === "") {
        setIsLoading(false);
        return generateError("Please enter the name.");
      } else if (surname === "") {
        setIsLoading(false);
        return generateError("Please enter the surName.");
      } else {
      }
    } else {
      CreateStudent();
    }
  };

  const CreateStudent = async () => {
    const values = {
      id: studentId,
      name: name,
      surname: surname,
      email: email,
      phone: "690460271",
    };

    axios
      .patch("https://timetable-4qip.onrender.com/api/student/update", values)
      .then((response) => {
        setIsLoading(false);
        props.setIsLoading(!props.isLoading);
        return generateSuccess("Update successful");
      })
      .catch((error) => {
        setIsLoading(false);
        return generateError(error.response.data.msg);
      });
  };

  // const create = async () => {

  //     console.log('Je suis dans la creatrion des Students : ', name, 'prenom : ', surname, " email : ", email, " Password : ", password);

  //     createUE({ name, surname, password, registerNumber, email }).then(({ data }) => {
  //         axios.get("/ue").then(({ data }) => dispatch(getAllUE(data)));
  //     });
  //     setIsLoading(false)
  //     return generateSuccess("Succesfully created " + code)
  // }

  return (
    <form className="setting-form">
      <Entry
        handler={handleMatricule}
        type="text"
        identifier="full-name-text"
        label="Enter the Matricule"
        isImage={false}
        muIcon={<Tag sx={{ color: "white", fontSize: "30px" }} />}
        value={registerNumber}
      />
      <Entry
        value={name}
        handler={handleName}
        type="text"
        identifier="registration-number-text"
        label="Enter the name"
        isImage={false}
        muIcon={
          <DriveFileRenameOutlineRounded
            sx={{ color: "white", fontSize: "30px" }}
          />
        }
      />
      <Entry
        value={surname}
        handler={handleSurName}
        type="text"
        identifier="registration-number-text"
        label="Enter the surname"
        isImage={false}
        muIcon={
          <DriveFileRenameOutlineRounded
            sx={{ color: "white", fontSize: "30px" }}
          />
        }
      />
      <Entry
        value={email}
        handler={handleEmail}
        type="email"
        identifier="registration-number-text"
        label="Enter the email"
        isImage={false}
        muIcon={
          <DriveFileRenameOutlineRounded
            sx={{ color: "white", fontSize: "30px" }}
          />
        }
      />

      <FormValidation
        isLoading={isLoading}
        submitHandler={handleSubmit}
        primaryLabel="Update"
      />
      <ToastContainer />
    </form>
  );
};
export default UpdateteacherForm;
