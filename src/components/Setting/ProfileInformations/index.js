import {React, useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import {
Person2,
Tag,
Dialpad,
Email
} from "@mui/icons-material";

// Useful icons
import usernameIcon from "../../../assets/images/username.svg"
import passwordIcon from "../../../assets/images/password.svg"
import togglePassword from "../../../assets/images/toggle_password.svg"

import "./style.css"
import Entry from "../../../components/Entry"
import FormValidation from "../../../components/FormValidation"

export const ProfileInfo
 = ({refresh}) => {
    
    // States for registration
    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');    
    
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


    return (
        
        <form className="setting-form">
            <Entry handler={handleName} type="text" identifier="full-name-text" label="Enter your name" isImage={false} muIcon={<Person2 sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={handleRegistrationNumber} type="text" identifier="registration-number-text" label="Enter your registration number" isImage={false} muIcon={<Tag sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={setPhone} type="text" label="Enter your  phone number" isPhone={true}  isImage={false} muIcon={<Dialpad sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={handleEmail} type="text" identifier="email-text" label="Enter your  email"  isImage={false} muIcon={<Email sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={handleUsername}  isImage={true} type="text" identifier="username-text" label="Enter your username" icon={usernameIcon}/>
            <Entry handler={handlePassword} type="password" identifier="password-text" label="Enter your password"  isImage={true} icon={passwordIcon} isPasswordEntry={
                <div className='toggle-icon'>
                    <img src={togglePassword} alt="toggle icon" width={"30px"}/>
                </div>
            }/>
        
            <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save"/>
        
    </form>

    );
};
export default ProfileInfo
;
