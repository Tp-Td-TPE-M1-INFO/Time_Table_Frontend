import './style.css';
import logo from '../../assets/images/logo.png'
export default function Descriptor(props) {

    return (
        <div className="descriptor" >
            <div className='normalizer'>
                <div className='contain'>
                    <div className='top-tasks'>
                        <img src={logo} alt='Logo' width={'50px'} style={{cursor:'pointer', borderRadius: 80}}/>
                        <div className='more'>
                            <div style={{color: 'white'}}>About us</div>
                            <div style={{backgroundColor:'white', color: 'var(--primary)'}}>{props.action}</div>
                        </div>
                    </div>
                    {props.welcome}
                    {props.encourager}
                </div>
            </div>
        </div>
    );
}

