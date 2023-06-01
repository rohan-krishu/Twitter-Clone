import './Home.module.css'
import React from 'react'
import WhatsHappening from './HomePages/WhatsHappening/WhatsHappening'
import SearchBar from './HomePages/SearchBar/SearchBar'
import styles from './Home.module.css'
import Sidebar from './HomePages/Left-SideBar/Sidebar'
import AddTweet from './HomePages/AddTweetSection/AddTweet'


export default function Home() {
  return (
    <div className={styles.combinedSection} >
      <div className= {styles.leftSection}>
       <Sidebar/>
      </div>
      

      <div className={styles.CenterSection}>
        <AddTweet />
        Helllo Twitter i making
        
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