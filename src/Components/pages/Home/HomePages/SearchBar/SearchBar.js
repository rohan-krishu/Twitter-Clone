import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div>
        <div className={styles.searchBar}>
            <input placeholder='Search Twitter' className={styles.inputField} />
            
        </div>
    </div>
  )
}
