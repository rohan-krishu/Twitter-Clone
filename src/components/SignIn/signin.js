import styles from "./SignIn.module.css"
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { useState } from "react";


export default function SignInPage(){

    const[input,setInput] =useState( )
    

    function handleEvent(event){
        setInput(event.target.value)

    }
    function handleClick(){
     
    }



    return (
    <div className={styles.main_container}>

       <BsTwitter className={styles.twitterIcon}/>
       <p className={styles.sign_heading}>Sign in to Twitter</p>
       <button className={styles.google_btn}><FcGoogle/> Sign in with Google</button>
       <br/>
       <br/>
       <button className={styles.apple_btn}><BsApple/> Sign in with Apple</button>
     
        <br/>
        <hr></hr>
        <span>or</span>
       <p className={styles.line}>.........................or.........................</p>
       <br/>
                <input type="text"
                className={styles.input_style} 
                placeholder="Phone ,email , or username"
                onChange={handleEvent}
                />
      
       <br/>
             <button 
             className={styles.next_btn}
            onClick={handleClick}
            >
             Next
             </button>
       <br/>
             <button className={styles.forget_btn}>Forget password?</button>
       <br/>

       <h2>Don't have an account ?</h2>
       <br/>
       <br/>
       

    </div>
    

    )
}