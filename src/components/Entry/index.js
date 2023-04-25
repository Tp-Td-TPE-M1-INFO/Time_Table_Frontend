
import './style.css';

export default function Entry(props) {

    return (
        <div className="entry-container">
            <div className='entry-icon'>
                <img src={props.icon} alt={props.label} width={"30px"}/>
            </div>
            <input onChange={props.handler} type={props.type} className="input-area" id={props.identifier} required/>
            <label for={props.identifier} className="label">{props.label}</label>
            {props.isPasswordEntry}
        </div>
        
    );
}