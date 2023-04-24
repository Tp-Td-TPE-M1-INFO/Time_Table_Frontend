
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import  axios  from "axios";
import Entry from "../components/Entry"
import Descriptor from "../components/Descriptor"
import {Form} from "react-bootstrap"
import FormValidation from "../components/FormValidation"
import 'bootstrap/dist/css/bootstrap.min.css'

// Page style
import '../styles/logIn.css';

export default function UserLogIn() {

    // States for registration
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate()


    // States for checking the errors
    const [isLoading, setIsLoading] = useState(false)
    // const [validated, setValidated] = useState(false);

    // Handling changes
    
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
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

        if ( username === '' || password === '') {            
            if (username === ""){
                setIsLoading(false)
                return generateError("Please enter your username.")
            } 
            else if (password === ""){
                setIsLoading(false)
                return generateError("Please enter your password.")
            }else{

            }
        } else {
            return signUp()
        }
    };
    const handleAbort = (e) => {
        e.preventDefault();
        navigate("/sign-up")
    };
    
    const signUp = () =>  {
        const values = { 
            "username":username,
            "password":password
        };

        axios.post('https://social-network-auth-service.onrender.com/api/login', values).then((response) => {
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
            <Descriptor welcome={<p className='welcome'>WELCOME TO TIMETABLE</p>} encourager={<p className='encourager'>Here is a very nice web service where you can browse <strong>easily</strong> the University of Yaounde I (UY1) timetable. We work hard for you to find what you want easily. We said alot, <span>have a cool browse</span>.</p>}/>
            
            <div className="recorder-c">
                <div className="form">
                    <div className='heading'>
                        <p>USER LOGIN</p>
                    </div>
                    <form className="client-login-form">
                        <Entry handler={handleUsername} type="text" identifier="username-text" label="Enter your username"/>
                        <Entry handler={handlePassword} type="password" identifier="password-text" label="Enter your password"/>
                        <div className='more-login'>
                            <Form.Check name="remember"  className="remember-value" label="Remember me" value="isRememberd"/>
                            <a href='#' style={{textDecoration:'none', color:'var(--primary)'}}>Forgot password?</a>
                        </div>
                        <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Log in" secondaryMessage="Don't have an account ?" abortHandler={handleAbort} secondaryLabel="Sign up"/>
                    </form>

                </div>
            </div>
            
            <ToastContainer/>
        </div>
        
    );
}