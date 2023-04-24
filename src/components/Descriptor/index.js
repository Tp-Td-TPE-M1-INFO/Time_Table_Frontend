import './style.css';
import alarm from '../../assets/images/Jugalux_alarm.svg'
export default function Descriptor(props) {

    return (
        <div className="descriptor" >
            <div className='normalizer'>
                <div className='contain'>
                    <div className='top-tasks'>
                        <img src={alarm} alt='Alarm logo' width={'30px'} style={{cursor:'pointer'}}/>
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

