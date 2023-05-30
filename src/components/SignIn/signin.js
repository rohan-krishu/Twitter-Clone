import styles from "./SignIn.module.css"
import { Link } from "react-router-dom";
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';


export default function SignInPage(){

    return (
    <div className={styles.main_container}>

       <BsTwitter className={styles.twitterIcon}/>
            <br/>
       <p className={styles.sign_heading}>Sign in to Twitter</p>
            <br/>
       <button className={styles.google_btn}><FcGoogle/> Sign in with Google</button>
            <br/>
       
       <button className={styles.apple_btn}><BsApple/> Sign in with Apple</button>
     
            <br/>
        
       <p className={styles.line}>......................or.......................</p>
       <br/>
                <input type="text"
                className={styles.input_style} 
                placeholder="Phone ,email , or username"
                
                />

             <button 
             className={styles.next_btn}
           
            >
             Next
             </button>
       <br/>
             <button className={styles.forget_btn}>Forget password?</button>
    <br/>

       <h2>Don't have an account ?</h2>
       <Link to={'/sign-up'}>Create Account</Link>
       <br/>
       <br/>
       
    </div>
    )
}