import {React} from 'react';
import profile from "../../../assets/images/logo.png"
import {
    Edit,
    Delete
  } from "@mui/icons-material";

import "./style.css"

export const ProfilePic
 = ({refresh}) => {

    return (
        <div className='profile-picture-container'>
            <div className='set-profile'>
                <img src={profile} alt='profile pic' className='profile-picture'/>
            </div>
            <div className='set-profile-options'>
                <div className='edit-option'>
                    <Edit sx={{fontSize:"2rem"}}/>
                    <span>Edit</span>
                </div>
                <div className='delete-option' >
                    <Delete sx={{fontSize:"2rem"}}/>
                    <span>Delete</span>
                </div>
            </div>
        </div>

    );
};
export default ProfilePic
;
