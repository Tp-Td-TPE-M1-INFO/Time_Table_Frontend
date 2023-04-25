import './style.css';

export default function Button(props) {

    return (
        <button onClick={props.handler} className={props.class} type="submit">
            {props.label}
        </button>
    );
}
