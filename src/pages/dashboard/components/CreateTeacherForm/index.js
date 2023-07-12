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

export const CreateTeacherForm = (props) => {
  const dispatch = useDispatch();

  // States for registration
  const [name, setName] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
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
      name: name,
      surname: surname,
      email: email,
      password: "12345678",
      registerNumber: registerNumber,
      phone: "690460271",
    };

    axios
      .post("https://timetable-4qip.onrender.com/api/teacher/register", values)
      .then((response) => {
        setIsLoading(false);
        props.setRealTime(!props.realTime);
        return generateSuccess("Adding successful");
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
      />
      <Entry
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
        primaryLabel="Save"
      />
      <ToastContainer />
    </form>
  );
};
export default CreateTeacherForm;
