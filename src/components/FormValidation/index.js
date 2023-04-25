
import {CircularProgress, Box} from '@mui/material';
import Button from "../FormButton"
import './style.css';

export default function FormValidation(props) {

    return (
        <div className="validation">
            <div className='progress'>
                {props.isLoading && <Box sx={{ width: '95%'}}>
                    
                    <CircularProgress color="success" />
                </Box>}
            </div>
            <Button handler={props.submitHandler} class="primary" label={props.primaryLabel}/>
        </div>
    );
}
