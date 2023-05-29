import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Registration() {

    const nameRegex = /^[a-zA-Z- ]+$/g;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/g;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')


    const [userArray, setUserArray] = useState([])

    const navigate = useNavigate()

    function registerUser(e) {
        e.preventDefault()

        const userData = {
            name,
            email,
            mobile
        }

        setEmail("")
        setMobile("")
        setName("")

        if (!nameRegex.test(name)) {
            alert("Enter Correct Name")
        } else if (!emailRegex.test(email)) {
            alert("Enter Correct Email")
        } else if (!mobileRegex.test(mobile)) {
            alert("Enter correct Mobile Number")
        } else {
            setUserArray((prevList) => [...prevList, userData])
            localStorage.setItem("user", JSON.stringify([...userArray, userData]))
            navigate('/sign-in')
            alert("Thanks for LoginIn")
        }
    }

    return (
        <div>
            <form onSubmit={registerUser}>
                <input placeholder='Add You name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Add You Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Add You Mobile' type='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />

                <button>Register</button>

                if already member of Twitter
                
                <Link to={'/sign-in'}>Login</Link>
            </form>


        </div>
    )
}
