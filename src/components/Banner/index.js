import { Link } from 'react-router-dom'
import './style.css';
import logo from '../../assets/images/logo.png'

export default function Banner(props) {

    return (
        <div className="descriptor" >
            <div className='normalizer'>
                <div className='contain'>
                    <div className='top-tasks'>
                        <img src={logo} alt='Alarm logo'  width={'50px'} style={{cursor:'pointer', borderRadius: 80}}/>
                        <div className='more'>
                            <div style={{ color: 'white'}}>About Us</div>
                            <div style={{backgroundColor:'white', color: 'var(--primary)',marginLeft:'1rem'}}>
                                <Link to={props.path} style={{textDecoration:"none",color:"var(--primary)"}}>
                                    {props.action}
                                </Link>
                            </div>
                        </div>
                    </div>
                    {props.welcome}
                    {props.encourager}
                </div>
            </div>
        </div>
    );
}

