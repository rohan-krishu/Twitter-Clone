import styles from "./SignIn.module.css"
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { useDispatch,useSelector } from 'react-redux'
import { setPhone } from "../../Store/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {

     const dispatch = useDispatch()
     const navigate = useNavigate()
     const { phone} = useSelector(state=>state.auth)

     
     function handleChange(e){
          dispatch(setPhone(e.target.value))
     }
    
     function handleClick() {
        const RegisData =  JSON.parse(localStorage.getItem("userData"))

        const userData =  RegisData.find(item=>(item.phone == phone))

        if(userData){
          alert("Sucees")
          navigate('/')
          
        }else{
          alert("fail")
        }
     }


     return (

          <div className={styles.main_container}>

               <BsTwitter className={styles.twitterIcon} />
               <br />
               <p className={styles.sign_heading}>Sign in to Twitter</p>
               <br />
               <button className={styles.google_btn}><FcGoogle /> Sign in with Google</button>
               <br />

               <button className={styles.apple_btn}><BsApple /> Sign in with Apple</button>

               <br />

               <p className={styles.line}>......................or.......................</p>
               <br />
               <input type="text"
                    className={styles.input_style}
                    placeholder="Phone ,email , or username"
                    onChange={handleChange}
                    value={phone}
               />

               <br />
               <button
                    className={styles.next_btn}
                    onClick={handleClick}
               >
                    Next
               </button>
               <br />
               <button className={styles.forget_btn}>Forget password?</button>
               <br />

               <h2>Don't have an account ?</h2>
               <br />
               <br />


          </div>


     )
}