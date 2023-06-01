import React from 'react'
import WhatsHappening from './HomePages/WhatsHappening/WhatsHappening'
import SearchBar from './HomePages/SearchBar/SearchBar'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.combinedSection}>
      <div className={styles.leftSection}>
        {/* Rohan call here */}
      </div>
      <div className={styles.CenterSection}>
        {/* <AddTweet /> */}
        
        {/* Suraj Call Here */}
      </div>
      <div className={styles.RightSection}>
        <SearchBar />
        <div className={styles.whatsHappening}>
          <WhatsHappening />
        </div>
      </div>
    </div>

  )
}
