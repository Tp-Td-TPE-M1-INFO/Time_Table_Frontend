
import { useState } from 'react';
import {Form} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Entry from "../components/Entry"
import Descriptor from "../components/Descriptor"
import FormValidation from "../components/FormValidation"
import  axios  from "axios";

// React modules style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

// Page style
import '../styles/signUp.css';

export default function UserSignUp() {

    // States for registration
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    
    const navigate = useNavigate()


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    // Handling changes
    const handleFullName = (e) => {
        setFullName(e.target.value);
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
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
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

        if (fullName === '' || username === '' || email === '' || password === '' || gender === '') {
            setError(true); 

            if (fullName === ""){
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
            else if (gender === ""){
                setIsLoading(false)
                return generateError("Please select your gender.")
            }else{

            }
        }
        else if (!isValidEmail(email)) {
            setError(true);
            setIsLoading(false)
            return generateError('Email is invalid')
        } else {
            setError(false);
            return signUp()
        }
    };

    const handleAbort = (e) => {
        e.preventDefault();
        navigate("/log-in")
    };
    
    const signUp = () =>  {
        const values = { 
            "fullname": fullName,
            "username":username,
            "email":email,
            "password":password,
            "gender":gender
        };

        axios.post('https://social-network-auth-service.onrender.com/api/register', values).then((response) => {
            setIsLoading(false);
            return generateSuccess(response.data.msg)
        })
        .catch((error) => {
            setIsLoading(false);
            return generateError(error.response.data.msg)
        });
    }

    return (
        <div className='main-c'>
            <Descriptor intro="Nice to see you"  welcome={<p className='welcome'>Welcome to <span style={{color:"var(--secondary)"}}>friendly</span></p>} encourager={<p className='encourager'>Here is a very nice social network where you can have <strong>infinite fun</strong>. So, if you need to <span>beautify your days</span>, you are at the right place.</p>}/>
            
            <div className="recorder-c">                
                <div className="form">
                    <div className='heading'>
                        {/* <img src={Logo} alt="Logo" style={{height:"4rem"}} /> */}
                    </div>
                    <form className="client-register-form">
                        <Entry handler={handleFullName} type="text" identifier="full-name-text" label="Full name"/>
                        <Entry handler={handleUsername} type="text" identifier="username-text" label="Username"/>
                        <Entry handler={handleEmail} type="text" identifier="email-text" label="Email"/>
                        <Entry handler={handlePassword} type="password" identifier="password-text" label="Password"/>

                        <Form.Group className="gender">
                            <Form.Label className='name'>Gender</Form.Label>
                            <div className='options'>
                                <Form.Check type="radio" name="gender"  className="gender-value" label="Male" value="Male"  onClick={(e) => {
                                setGender(e.target.value)
                                }}/>
                                <Form.Check type="radio"  name="gender" className="gender-value" label="Female"  value="Female"  onClick={(e) => {
                                setGender(e.target.value)
                                }}/>
                            </div>
                        </Form.Group>
                        
                        <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Sign up" secondaryMessage="Already have an account ?" abortHandler={handleAbort} secondaryLabel="Log in"/>
                        
                    </form>

                </div>
            </div>
            
            <ToastContainer/>
        </div>
        
    );
}