import styles from "./SignIn.module.css";
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPhone, setUserName } from "../../Store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignInPage() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [error, setError] = useState('')
     const [loginError, setLoginError] = useState('')
     // const [success, setSuccess] = useState()

     const { phone, userName } = useSelector(state => state.auth);

     function handleChange(e) {
          dispatch(setPhone(e.target.value));
          dispatch(setUserName(e.target.value))
          dispatch(setEmail(e.target.value))
     }

     function handleClick() {
          const RegisData = JSON.parse(localStorage.getItem("userData"));
          if (RegisData === null || RegisData.length === 0) {
               setLoginError("No such user found. Please sign up to login.");
               return;
          }

          const userData = RegisData.find(item => (item.userName === userName))
          if (userData) {
               localStorage.setItem("loggedIn", true)
               dispatch(setUserName(""))
               navigate('/');
          } else {
               setError("Verify User Name")
          }


     }


     return (
          <div className={styles.container}>
               <div className={styles.main_container}>
                    <BsTwitter className={styles.twitterIcon} />
                    <p className={styles.sign_heading}>Sign in to Twitter</p>
                    <button className={styles.google_btn}>
                         <FcGoogle /> Sign in with Google
                    </button>
                    <button className={styles.apple_btn}>
                         <BsApple /> Sign in with Apple
                    </button>
                    <p className={styles.line}>......................or.......................</p>

                    <p className="errorMessage">{loginError}</p>
                    <>
                         <input
                              type="text"
                              className={styles.input_style}
                              placeholder="Add UserName"
                              onChange={handleChange}
                              value={userName}
                         />
                    </>

                    <p className="errorMessage">{error}</p>

                    <button className={styles.next_btn} onClick={handleClick}>
                         Next
                    </button>

                    <button className={styles.forget_btn}>Forget password?</button>
                    <div >
                         <h2>Don't have an account? <Link to={'/enter-page'} className="noAccount" >Sign Up</Link></h2>
                    </div>
               </div>
          </div>
     );
}