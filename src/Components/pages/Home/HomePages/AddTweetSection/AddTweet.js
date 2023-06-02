import React from 'react'
import './AddTweets.css'
import { FaRegSmile, FaRegImages } from 'react-icons/fa'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

export default function AddTweet() {
    return (
        <div className='addTweets'>
            <div className='profilePic'>
                <img className='pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn76davUn_jFxkNKn8PsIBFO5_Nd24YbCvVC36j7n06g&usqp=CAU&ec=48665701' />
            </div>
            <div className='whatsHappening'>
                <div className='placeholder'>
                    <input placeholder='What is Happening!' className='input' />
                </div>
                <div className='icons'>
                    <FaRegSmile className='icon' />
                    <FaRegImages className='icon' />
                    <AiOutlineFileGif className='icon' />
                    <BiPoll className='icon' />
                    <GoLocation className='icon' />
                </div>
            </div>
            <div className='TweetBtn'>
            <button className='tweetHere'>Add Tweet</button>
            </div>
        </div>
    )
}











// import React from 'react'
// import styles from './AddTweet.module.css'
// import {FaRegSmile,FaRegImages} from 'react-icons/fa'
// import { AiOutlineFileGif } from 'react-icons/ai'
// import { BiPoll } from 'react-icons/bi'
// import { GoLocation } from 'react-icons/go'




// // BiPoll
// export default function AddTweet() {
//     return (
//         <div>
//             <div className={styles.container}>
//                 <div>
//                     <input placeholder='What is happening?!' className={styles.inputField} />
//                 </div>
//                 <div className={styles.bottomField}>
//                     <FaRegSmile className={styles.icons}/>
//                     <FaRegImages className={styles.icons}/>
//                     <AiOutlineFileGif className={styles.icons}/>
//                     <BiPoll className={styles.icons}/>
//                     <GoLocation className={styles.icons}/>
//                 </div>
//             </div>
//         </div>
//     )
// }
