import React from 'react';
import './Home.module.css';
import WhatsHappening from './HomePages/WhatsHappening/WhatsHappening';
import SearchBar from './HomePages/SearchBar/SearchBar';
import Sidebar from './HomePages/Left-SideBar/Sidebar';
import Tweets from './HomePages/Tweets/Tweets';
import AddTweet from './HomePages/AddTweetSection/AddTweet';
import LogOut from '../LogOut.js/LogOut';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Sidebar />
        <LogOut />
      </div>

      <div className={styles.centerSection}>
        <AddTweet />
        <Tweets />
      </div>

      <div className={styles.rightSection}>
        <SearchBar />
        <div className={styles.whatsHappening}>
          <WhatsHappening />
        </div>
      </div>
    </div>
  );
}
