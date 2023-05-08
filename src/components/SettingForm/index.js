// # +====================================================================================+ #
// # |================================= Powerk-soft ======================================| #
// # |====================== bus-tickets app - All rights reserved =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

import {React,useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import {LinearProgress, Box} from '@mui/material';
import  axios  from "axios";
import { useTranslation } from 'react-i18next';
import Language from '../../components/Language';

import Entry from "../Entry"

export const FormAdmin = ({refresh}) => {
    //State for translation
    const {t,i18n} = useTranslation();

    // States for registration
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [superAdminKey, setSuperAdminKey] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    // const [validated, setValidated] = useState(false);

    // Handling changes
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
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSuperAdminKey = (e) => {
        setSuperAdminKey(e.target.value);
        setSubmitted(false);
    };
    const generateError = (err) =>
    toast.error(err, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    })
    const generateSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        })
        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
    }
    
    async function submit (){
    
        const values = {
            "username": username,
            "email": email,
            "password": password,
            "confirm_password": confirmPassword,
            "super_admin_key": superAdminKey
        };
        // console.log(values)
        setSubmitted(true)
        await axios.post("http://localhost:8000/api/admin", values).then((data) => {
            generateSuccess(`Succesfully created admin @${username}`)
        }).catch((error) => {
            generateError(error.response.data.detail)
        })
        setIsLoading(false);
        refresh()
    }
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        if (username === '' || email === '' || password === '' || confirmPassword === '' || superAdminKey === '') {
            setError(true); 
            if (username === ""){
                setIsLoading(false)
                return generateError("Please enter the username.")
            } 
            else if (email === ""){
                setIsLoading(false)
                return generateError("Please enter the email.")
            } 
            else if (password === ""){
                setIsLoading(false)
                return generateError("Please enter the password.")
            } 
            else if (confirmPassword === ""){
                setIsLoading(false)
                return generateError("Please confirm the password.")
            }
            else if (superAdminKey === ""){
                setIsLoading(false)
                return generateError("Please enter the super-admin key.")
            } else{

            }
        }
        else if (!isValidEmail(email)) {
            setError(true);
            setIsLoading(false)
            return generateError('Email is invalid')
        } else {
            console.log("Here")
            setError(false);
            return submit()
        }
    };
    
    return (
        <div className="form-client">
            {isLoading && <Box sx={{ width: '95%'}}>
            <LinearProgress />
            </Box>}
            <form onSubmit={handleSubmit} className="client-register-form-client">
                <div className='language' style={{left:"0.5rem"}}><Language/></div>
                <Entry handler={handleUsername} type="text" identifier="username-text" label={t("username")}/>
                <Entry handler={handleEmail} type="text" identifier="email-text" label={t("Email")}/>
                <Entry handler={handlePassword} type="password" identifier="password-text" label={t("password")}/>
                <Entry handler={handleConfirmPassword} type="password" identifier="confirm-password-text" label={t("confirmPassword")}/>
                <Entry handler={handleSuperAdminKey} type="password" identifier="full-name-text" label={t("superAdminKey")}/>

                <div className="validation">
                    <button className="primary" type="submit" style={{cursor
                    :"pointer"}}>
                        Create
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};
export default FormAdmin;
