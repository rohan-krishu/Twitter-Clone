import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './LogOut.css'

export default function LogOut() {
    const navigate = useNavigate()
    const {phone} = useSelector(state=>state.auth)
    const myName = JSON.parse(localStorage.getItem('userData'))
    let loggedUser = myName.map(item => item.phone)

    function logOutUser() {
        localStorage.removeItem("loggedIn")
        navigate('/sign-in')
    }

    return (
        <div className='logoutSection'>
            <div>
                <div className='profilePic'>
                    <img className='userImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn76davUn_jFxkNKn8PsIBFO5_Nd24YbCvVC36j7n06g&usqp=CAU&ec=48665701' alt={`${loggedUser}`} />
                </div>
            </div>

            <div className='userData'>
                <p className='userName'>{loggedUser[phone]}</p>
                <button className='logoutBtn' onClick={logOutUser}>LogOut</button>
            </div>

        </div>
    )
}
