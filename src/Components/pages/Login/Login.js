import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {

    const [userMobile, setUserMobile] = useState('')
    const navigate = useNavigate()

    function submitloginData(e){
        e.preventDefault()
        const getData = JSON.parse(localStorage.getItem('user'))        
       let getlogin =  getData.find((item)=>item.mobile === userMobile)

       if(getlogin){
        localStorage.setItem("loggedIn", true)
        alert("You are Succesfully Logged In")
        navigate('/')
       }else{
        alert("Enter Correct Mobile Number")
       }
       
    }
  return (
    <div>
        <h1>Login Here</h1>

        <form onSubmit={submitloginData}>
            
            <input placeholder='mobile' onChange={(e)=>setUserMobile(e.target.value)} />
            <button>LogIn</button>

        </form>
        if new to Twitter -- Register Here
        <Link to={'/sign-up'}>Register</Link>
    </div>
  )
}
