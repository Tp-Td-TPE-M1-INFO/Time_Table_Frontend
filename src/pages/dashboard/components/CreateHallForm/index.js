import { React, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useCreateHallMutation } from '../../../../redux/api'
import {
    Tag,
    DriveFileRenameOutlineRounded
} from "@mui/icons-material";

import "./style.css"
import Entry from "../../../../components/Entry"
import FormValidation from "../../../../components/FormValidation"
import { useDispatch } from 'react-redux'
import { getAllHall } from '../../../../redux/slices/hallSlice'
import axios from "../../../../axios";

export const HallCreate
    = ({ refresh }) => {
        const dispatch = useDispatch()

        // States for registration
        const [name, setName] = useState("");
        const [capacity, setCapacity] = useState(0);
        const [createHall] = useCreateHallMutation();

        // State when loading
        const [isLoading, setIsLoading] = useState(false)

        // Handling changes
        const handleName = (e) => {
            setName(e.target.value);
        };
        const handleCapacity = (e) => {
            setCapacity(parseInt(e.target.value));
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

            if (name === '' || capacity === '') {
                if (name === "") {
                    setIsLoading(false)
                    return generateError("Please enter the name.")
                }
                else if (capacity === "") {
                    setIsLoading(false)
                    return generateError("Please enter the capacity.")
                } else {

                }
            } else {
                create()
            }
        };

        const create = async () => {

            createHall({ name, capacity }).then(({ data }) => {
                generateSuccess("Succesfully created " + name)
                axios.get("/hall/allHalls").then(({ data }) => dispatch(getAllHall(data)));
            });
            setIsLoading(false)
        }

        return (

            <form className="setting-form">
                <Entry handler={handleName} type="text" identifier="full-name-text" label="Enter the name" isImage={false} muIcon={<DriveFileRenameOutlineRounded sx={{ color: "white", fontSize: "30px" }} />} />
                <Entry handler={handleCapacity} type="text" identifier="registration-number-text" label="Enter the capactity" isImage={false} muIcon={<Tag sx={{ color: "white", fontSize: "30px" }} />} />

                <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save" />
                <ToastContainer />
            </form>

        );
    };
export default HallCreate
    ;
