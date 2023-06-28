import {React, useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import {useCreateClassMutation} from '../../../../redux/api'
import {
    Tag
} from "@mui/icons-material";

import "./style.css"
import Entry from "../../../../components/Entry"
import FormValidation from "../../../../components/FormValidation"
import { useDispatch } from 'react-redux'
import { getAllClass } from '../../../../redux/slices/classSlice'
import axios from "../../../../axios";

export const ClassCreate
 = ({refresh}) => {
    const dispatch = useDispatch()

    // States for registration
    const [level, setLevel] = useState('');
    const [effectif, setEffectif] = useState(0);
    const [sector, setSector] = useState("");
    const [createClass] = useCreateClassMutation();
    
    // State when loading
    const [isLoading, setIsLoading] = useState(false)
    
    // Handling changes
    const handlelevel = (e) => {
        setLevel(e.target.value);
    };
    const handleEffectif = (e) => {
        setEffectif(parseInt(e.target.value));
    };
    const handleSector = (e) => {
        setSector(e.target.value);
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
        
        if (level === '' || sector === '' || effectif === '') {            
            if (sector === ""){
                setIsLoading(false)
                return generateError("Please enter the sector.")
            } else if (level === ""){
                setIsLoading(false)
                return generateError("Please enter the level.")
            } else if (effectif === ""){
                setIsLoading(false)
                return generateError("Please enter the capacity.")
            }else{

            }
        } else {
            create()
        }
    };

    const create = async() => {
        
        createClass({ sector, level, effectif}).then(({ data }) => {
            generateSuccess(`Succesfully created ${sector} - ${level}`)
            axios.get("/class").then(({ data }) => dispatch(getAllClass(data)));
        });
        setIsLoading(false)
    }

    return (
        
        <form classlevel="setting-form">
            <Entry handler={handleSector} type="text" identifier="sector-text" label="Enter the sector" isImage={false} muIcon={<Tag sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={handlelevel} type="text" identifier="level-text" label="Enter the level" isImage={false} muIcon={<Tag sx={{color:"white",  fontSize:"30px"}}/>}/>
            <Entry handler={handleEffectif} type="text" identifier="effectif-text" label="Enter the capacity"  sx={{color:"white",  fontSize:"30px"}}/>}/>
        
            <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save"/>
            <ToastContainer/>
    </form>

    );
};
export default ClassCreate
;
