import {React, useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import {useCreateLevelMutation} from '../../../../redux/api'
import {
    DriveFileRenameOutlineRounded
} from "@mui/icons-material";

import "./style.css"
import Entry from "../../../../components/Entry"
import FormValidation from "../../../../components/FormValidation"
import { useDispatch } from 'react-redux'
import { getAllLevel } from '../../../../redux/slices/levelSlice'
import axios from "../../../../axios";

export const LevelCreate
 = ({refresh}) => {
    const dispatch = useDispatch()

    // States for registration
    const [name, setName] = useState("");
    const [createLevel] = useCreateLevelMutation();
    
    // State when loading
    const [isLoading, setIsLoading] = useState(false)
    
    // Handling changes
    const handlename = (e) => {
        setName(e.target.value);
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
        
        if (name === '') {       
            setIsLoading(false)
            return generateError("Please enter the name.")
        } else {
            create()
        }
    };

    const create = async() => {
        
        createLevel({ name}).then(({ data }) => {
            console.log(data)
            axios.get("/level").then(({ data }) => dispatch(getAllLevel(data)));
        });
        setIsLoading(false)
        return generateSuccess("Succesfully created " + name)
    }

    return (
        
        <form className="setting-form">
            <Entry handler={handlename} type="text" identifier="full-name-text" label="Enter the name" isImage={false} muIcon={<DriveFileRenameOutlineRounded sx={{color:"white",  fontSize:"30px"}}/>}/>
        
            <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save"/>
            <ToastContainer/>
    </form>

    );
};
export default LevelCreate
;
