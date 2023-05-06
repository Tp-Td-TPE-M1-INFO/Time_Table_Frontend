import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Entry from "../components/Entry"
import FormValidation from "../components/FormValidation"
import {
    Person2Outlined,
    Person2,
    Tag,
    Dialpad,
    Email,
    LockOpen,
    EditOutlined,
    DeleteOutlined 
  } from "@mui/icons-material";
  import {
    Box,
    IconButton
  } from "@mui/material";
import Dropzone from "react-dropzone";

import "../styles/setting.css"
// Useful icons
import usernameIcon from "../assets/images/username.svg"
import passwordIcon from "../assets/images/password.svg"
import togglePassword from "../assets/images/toggle_password.svg"


// React modules style
import 'react-toastify/dist/ReactToastify.css';
function Setting(props) {
    
    const navigate = useNavigate()
    // States for registration
    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');

     // States for checking the errors
     const [submitted, setSubmitted] = useState(false);
     const [error, setError] = useState(false);
     const [isLoading, setIsLoading] = useState(false)
     
     // Handling changes
     const handleName = (e) => {
         setName(e.target.value);
         setSubmitted(false);
     };
     const handleRegistrationNumber = (e) => {
         setName(e.target.value);
         setSubmitted(false);
     };
     const handleUsername = (e) => {
         setUsername(e.target.value);
         setSubmitted(false);
     };
     const handleEmail = (e) => {
         setEmail(e.target.value);
         setSubmitted(false);
     };
     const handlePassword = (e) => {
         setPassword(e.target.value);
         setSubmitted(false);
     };
     const handlePhone = (e) => {
         setPhone(e.target.value);
         setSubmitted(false);
     };
     
     function isValidEmail(email) {
         return /\S+@\S+\.\S+/.test(email);
     }
    
     const generateError = (err) =>
     toast.error(err, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored",
     })
     const generateSuccess = (msg) =>
     toast.success(msg, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored",
     })
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        
        if (name === '' || username === '' || email === '' || password === '' || registrationNumber === '' || phone === '') {
            setError(true); 
            
            if (name === ""){
                setIsLoading(false)
                return generateError("Please enter your full name.")
            } 
            else if (username === ""){
                setIsLoading(false)
                return generateError("Please enter your username.")
            } 
            else if (email === ""){
                setIsLoading(false)
                return generateError("Please enter your email.")
            } 
            else if (password === ""){
                setIsLoading(false)
                return generateError("Please enter your password.")
            } 
            else if (phone === ""){
                setIsLoading(false)
                return generateError("Please enter your phone number.")
            }else{

            }
        }else if (phone.length !== 13){
            setIsLoading(false)
            return generateError("Invalid phone format, you should enter 7 digits.")

        }
        else if (phone.charAt(4) !== '2' && phone.charAt(4) !== '6'){
            setIsLoading(false)
            return generateError("Invalid phone format, the first digit should be 2 or 6.")

        }
        else if (!isValidEmail(email)) {
            setError(true);
            setIsLoading(false)
            return generateError('Email is invalid')
        } else {
            setError(false);
            // return signUp()
        }
    };
    const handleAbort = (e) => {
        e.preventDefault();
        navigate("/log-in")
    };
    return (
        <div className='setting-container'>
            <div className='setting-normalizer'>
                <div className='setting-content'>
                    
                    <form className="client-register-form">
                        
                        <Dropzone
                            sx={{backgroundColor:"white"}}
                            acceptedFiles=".jpg,.jpeg,.png"
                            multiple={false}
                            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                        >
                            {({ getRootProps, getInputProps }) => (
                            <div style={{backgroundColor:"white",border:"1px solid white",borderRadius:"60px",padding:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
                                <Box
                                {...getRootProps()}
                                border={`2px dashed var(--primary)`}
                                borderRadius="60px"
                                p="1rem"
                                width="100%"
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ "&:hover": { cursor: "pointer" } }}
                                >
                                <input {...getInputProps()} />
                                {!image ? (
                                    <>
                                        <Person2 sx={{color:"var(--primary)",  fontSize:"30px"}}/>
                                        <p style={{color:"var(--primary)"}}>Add Profile Picture Here</p>
                                    </>
                                ) : (
                                    <div>
                                    <p>{image.name}</p>
                                    <EditOutlined sx={{color:"green"}}/>
                                    </div>
                                )}
                                </Box>
                                {image && (
                                <IconButton
                                    onClick={() => setImage(null)}
                                    sx={{ width: "15%" }}
                                >
                                    <DeleteOutlined  sx={{color:"red"}}/>
                                </IconButton>
                                )}
                            </div>
                            )}
                        </Dropzone>

                        <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting" handler={handleName} type="text" identifier="full-name-text" label="Name" isImage={false} muIcon={<Person2 sx={{color:"var(--primary)",  fontSize:"30px"}}/>}/>
                        <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting"  handler={handleRegistrationNumber} type="text" identifier="full-name-text" label="Registration number" isImage={false} muIcon={<Tag sx={{color:"var(--primary)",  fontSize:"30px"}}/>}/>
                        <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting"  handler={setPhone} type="text" label="Phone number" isPhone={true}  isImage={false} muIcon={<Dialpad sx={{color:"var(--primary)",  fontSize:"30px"}}/>}/>
                        <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting"  handler={handleEmail} type="text" identifier="email-text" label="Email"  isImage={false} muIcon={<Email sx={{color:"var(--primary)",  fontSize:"30px"}}/>}/>
                        <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting"  handler={handleUsername}  isImage={false} type="text" identifier="username-text" label="Username" muIcon={<Person2Outlined sx={{color:"var(--primary)",  fontSize:"30px"}}/>}/>
                        <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting"  handler={handlePassword} type="password" identifier="password-text" label="Password"  isImage={false} muIcon={<LockOpen sx={{color:"var(--primary)",  fontSize:"30px"}}/>} isPasswordEntry={
                            <div className='toggle-icon'>
                                <img src={togglePassword} alt="toggle icon" width={"30px"}/>
                            </div>
                        }/>
                        
                        <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save" bg="rgba(0, 0, 156, 0.8)" bgb="white"/>
                        
                    </form>
                </div>
            </div>
            
            <ToastContainer/>
        </div>
    )
}

export default Setting
