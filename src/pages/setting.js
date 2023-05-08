import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
    Edit,
  } from "@mui/icons-material";
  import {
    Box,
    IconButton
  } from "@mui/material";
import profile from "../assets/images/logo.png"

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
            <div className='setting-content'>
                <div className='setting-banner'>
                    <div className='setting-profile'>
                        <img src={profile} alt='profile pic' className='profile-picture'/>
                    </div>
                </div>
                <div className='setting-info'>
                    <div className='edit'>
                        <Edit sx={{color:"gray", fontSize:"2.5rem", border:"0px solid white", borderRadius:"50%"}}/>
                    </div>
                    <div className='info-1'>
                        <h1>NDANG ESSI Pierre Junior</h1>
                        <h3>#18T2419</h3>
                    </div>
                    <div className='info-2'>
                        <h3>nessipjunior@gmail.com</h3>
                        <h3>@EssiJunior</h3>
                        <h3>+237 6 90 74 37 37</h3>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Setting
