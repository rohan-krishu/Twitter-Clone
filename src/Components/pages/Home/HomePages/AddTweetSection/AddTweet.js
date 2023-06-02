import React from 'react'
import styles from './AddTweet.module.css'
import {FaRegSmile,FaRegImages} from 'react-icons/fa'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'




// BiPoll
export default function AddTweet() {
    return (<>
              
            <div className={styles.container}>
            <div className={styles.head_style}>
                  <h1>Home</h1> <br/>
                <h3>For you</h3> <br/>
                <h3>Following</h3>
                
              </div>
                   <div className={styles.user_style}>
                       <img src="https://i.pravatar.cc/150?img=31" 
                            className={styles.useImage_style}/>
                        <input placeholder='What is happening?!' className={styles.inputField} />
                   </div>
                    <br/> 
                    
                           <div className={styles.bottomField}>
                              <FaRegSmile className={styles.icons}/>
                              <FaRegImages className={styles.icons}/>
                              <AiOutlineFileGif className={styles.icons}/>
                              <BiPoll className={styles.icons}/>
                              <GoLocation className={styles.icons}/> 
                              <button className={styles.btn_style}>tweet</button>
                            </div>
                           
                       
            </div>
            
                
        
        </>
    )
}
