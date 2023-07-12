import React from 'react'
import { Link } from 'react-router-dom'
import TimetableList from './dashboard/TimetableList'
import logo from '../assets/images/logo.png'


const HomePage = () => {

    return (
        <div className='w-100 p-5 pt-2'>

            <div className='d-flex justify-content-center'>
                <Link to='/'>
                    <img src={logo} alt='logo'  width={100} style={{ borderRadius: 80}}/>
                </Link>
            </div>

            <TimetableList />
        </div>
    )
}

export default HomePage
