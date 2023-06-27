import {React, useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import {useCreateUEMutation} from '../../../../redux/api'
import {
    Tag,
    DriveFileRenameOutlineRounded
} from "@mui/icons-material";

import "./style.css"
import Entry from "../../../../components/Entry"
import FormValidation from "../../../../components/FormValidation"
import { useDispatch } from 'react-redux'
import { getAllUE } from '../../../../redux/slices/UESlice'
import axios from "../../../../axios";

export const UECreate
 = ({refresh}) => {
    const dispatch = useDispatch()

    // States for registration
    const [code, setCode] = useState("");
    const [intitule, setIntitule] = useState("");
    const [createUE] = useCreateUEMutation();
    
    // State when loading
    const [isLoading, setIsLoading] = useState(false)
    
    // Handling changes
    const handleCode = (e) => {
        setCode(e.target.value);
    };
    const handleIntitule = (e) => {
        setIntitule(e.target.value);
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
        
        if (code === '' || intitule === '') {            
            if (code === ""){
                setIsLoading(false)
                return generateError("Please enter the code.")
            } 
            else if (intitule === ""){
                setIsLoading(false)
                return generateError("Please enter the description.")
            }else{

            }
        } else {
            create()
        }
    };

    const create = async() => {
        
        createUE({ code, intitule}).then(({ data }) => {
            console.log(data)
            axios.get("/ue").then(({ data }) => dispatch(getAllUE(data)));
        });
        setIsLoading(false)
        return generateSuccess("Succesfully registered " + code)
    }

    return (
        
        <form className="setting-form">
            <Entry handler={handleCode} type="text" identifier="full-name-text" label="Enter the code" isImage={false} muIcon={<Tag sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={handleIntitule} type="text" identifier="registration-number-text" label="Enter the description" isImage={false} muIcon={<DriveFileRenameOutlineRounded sx={{color:"white",  fontSize:"30px"}}/>}/>
        
            <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save"/>
            <ToastContainer/>
    </form>

    );
};
export default UECreate
;
