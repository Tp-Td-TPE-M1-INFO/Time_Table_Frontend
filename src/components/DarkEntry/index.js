
import './style.css';

export default function Entry(props) {

    return (
        <>
            <Entry stylizingI="entry-setting" stylizingEI="icon-setting" stylizingEC="container-setting" stylizingL="label-setting" handler={props.handler} type={props.type} identifier={props.identifier} label={props.label} isImage={false} muIcon={props.materialIcon}/>
        </>
        
    );
}