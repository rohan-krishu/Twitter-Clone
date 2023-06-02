import React from 'react'
import WhatsHappening from './HomePages/WhatsHappening/WhatsHappening'
import SearchBar from './HomePages/SearchBar/SearchBar'
import styles from './Home.module.css'
import AddTweet from './HomePages/AddTweetSection/AddTweet'
import Tweets from './HomePages/Tweets/Tweets'
import WhoToFollow from './HomePages/WhoToFollow/WhoToFollow'
import Sidebar from './HomePages/Left-SideBar/Sidebar'




export default function Home() {


 return ( <div className={styles.home_style}>

              <div className={styles.leftSection_style}>
              <Sidebar/>

              </div>

              <div className={styles.middleSection_style}>
                 
                 <Tweets/> 

               </div>



              <div className={styles.rightSection_style}>

                  <SearchBar/>
                  <br/> 
                  <WhatsHappening/> 
                  <br/>
                  <WhoToFollow/>

              </div>
               
               

          </div>    

  )
}
