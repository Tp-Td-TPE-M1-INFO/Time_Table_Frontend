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

// React modules style
import 'react-toastify/dist/ReactToastify.css';
import ContainerC from '../components/Container';
import ProfilePic from '../components/Setting/ProfilePicture';
import ProfileInfo from '../components/Setting/ProfileInformations';

function Setting(props) {
    
    // States for registration

    const [image, setImage] = useState('');
    
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


    return (
        <div className='setting-container'>
            <div className='setting-content'>
                <div className='setting-banner'>
                    <ContainerC component={<div className='setting-profile'>
                        <img src={profile} alt='profile pic' className='profile-picture'/>
                    </div>} formToDisplay={<ProfilePic/>} heading="Profile Picture"/>
                    
                </div>
                <div className='setting-info'>
                    <ContainerC component={<div className='edit'><Edit sx={{color:"gray", fontSize:"2.5rem", border:"0px solid white", borderRadius:"50%"}}/>
                    </div>} formToDisplay={<ProfileInfo/>} heading="Personal Information"/>                    
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
