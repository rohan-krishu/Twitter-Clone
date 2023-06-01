import styles from "./Tweets.module.css"
import Data from "./tweet.json"
import { FaRetweet } from 'react-icons/fa';
import { BiMessageRounded } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { FaPoll } from 'react-icons/fa';
import { LuShare } from 'react-icons/lu';
import { useState } from "react";




//FaRetweet
//BiMessageRounded
//FcLike
//FaPoll
//LuShare


export default function Tweets() {
      



    return (
        <div className={styles.main_container}>
            
           

            {
                Data.map(data => {
                    return (
                        <div className={styles.oneTweet_container}>  
                            <div className={styles.user_style}>
                                
                                <img className={styles.userImage_style}
                                    src={data.tweetedBy.userImage} />
                                <div className={styles.name_style}>
                                    {data.tweetedBy.name}
                                   <div className={styles.userName_style}>
                                    @{(data.tweetedBy.name).toLowerCase().replace(/\s/g, "_")+Math.floor(Math.random()*(999-100+1)) + 100}
                                   </div>  
                                </div>
                        
                                     
                            </div>


                            <div className={styles.tweet_container}>
                                <div className={styles.content_style}>
                                    {data.content}
                                </div>
                                <img src={data.image} alt="dummy image "
                                    className={styles.img_style}
                                 />
                            </div>

                            <div className={styles.icons_style}>
                                <div><BiMessageRounded/>{Math.floor(Math.random()*(99-10+1)) + 10}</div>
                               <div><FaRetweet className={styles.retweetIcon_style}/> {data.reTweetsCount}</div>
                               <div >
                                <FcLike /> {data.likeCount}
                                </div>
                               <div><FaPoll/> {data.commentCount}</div>
                               <LuShare/>
                            </div>





                        
                         </div>

                    )
                })
            }



        </div>
    )

}                                                                               