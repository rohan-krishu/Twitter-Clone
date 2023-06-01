import React from 'react'
import styles from './AddTweet.module.css'
import {FaRegSmile,FaRegImages} from 'react-icons/fa'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'




// BiPoll
export default function AddTweet() {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <input placeholder='What is happening?!' className={styles.inputField} />
                </div>
                <div className={styles.bottomField}>
                    <FaRegSmile className={styles.icons}/>
                    <FaRegImages className={styles.icons}/>
                    <AiOutlineFileGif className={styles.icons}/>
                    <BiPoll className={styles.icons}/>
                    <GoLocation className={styles.icons}/>
                </div>
            </div>
        </div>
    )
}
