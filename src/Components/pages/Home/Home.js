import React from 'react'
import WhatsHappening from './HomePages/WhatsHappening/WhatsHappening'
import SearchBar from './HomePages/SearchBar/SearchBar'
import styles from './Home.module.css'
import AddTweet from './HomePages/AddTweetSection/AddTweet'
export default function Home() {
  return (
    <div className={styles.CenterSection}>
       <AddTweet/>
      <div className={styles.RightSection}>
        <SearchBar />
        <div className={styles.whatsHappening}>
          <WhatsHappening />
        </div>
      </div>
     
    </div>
  )
}
