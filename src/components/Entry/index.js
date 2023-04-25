
import PhoneInput from 'react-phone-number-input/input'
import './style.css';

export default function Entry(props) {

    return (
        <div className="entry-container">
            <div className='entry-icon'>
                {props.isImage ? 
                    <img src={props.icon} alt={props.label} width={"30px"}/>:
                    <>{props.muIcon}</>
                }
            </div>
            {
                props.isPhone ?
                    <PhoneInput
                    placeholder={props.label}
                    country="CM"
                    onChange={props.handler}
                    className="input-area" />
                :
                <>
                    <input onChange={props.handler} type={props.type} className="input-area" id={props.identifier} required/>
                    <label for={props.identifier} className="label">{props.label}</label>
                    {props.isPasswordEntry}
                </>
            }
        </div>
        
    );
}