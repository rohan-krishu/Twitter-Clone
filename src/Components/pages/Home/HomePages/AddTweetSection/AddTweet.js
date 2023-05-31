import React from 'react'
import styles from './AddTweet.module.css'

export default function AddTweet() {
  return (
    <div>
        <div className={styles.container}>
            <input placeholder='What is happening?!'/>
        </div>
    </div>
  )
}
