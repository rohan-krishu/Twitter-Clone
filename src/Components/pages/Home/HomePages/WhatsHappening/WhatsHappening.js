import React from 'react'
import styles from './WhatsHappening.module.css'

export default function WhatsHappening() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.sectionHeading}>
                    <h1 className={styles.heading}>Whats Happening</h1>
                </div>
                <div className={styles.sections} >
                    <div className={styles.section} >
                        <div className={styles.leftSection}>
                            <div className={styles.leftPart}>
                                <div className={styles.category}>Sports</div>
                                <div className={styles.trending}> .Trending</div>
                            </div>
                            <div className={styles.TrendingContent}>
                                <p>Mumbai Indians</p>
                            </div>
                            <div className={styles.tweets}>5648 Tweets</div>
                        </div>
                        <div className={styles.RightSection}>...</div>
                    </div>
                </div>
                <div className={styles.sections} >
                    <div className={styles.section} >
                        <div className={styles.leftSection}>
                            <div className={styles.leftPart}>
                                <div className={styles.category}>Sports</div>
                                <div className={styles.trending}> .Trending</div>
                            </div>
                            <div className={styles.TrendingContent}>
                                <p>Mahendra Singh Dhoni</p>
                            </div>
                            <div className={styles.tweets}>5648 Tweets</div>
                        </div>
                        <div className={styles.RightSection}>...</div>
                    </div>
                </div>
                <div className={styles.sections} >
                    <div className={styles.section} >
                        <div className={styles.leftSection}>
                            <div className={styles.leftPart}>
                                <div className={styles.category}>Entertainment</div>
                                <div className={styles.trending}> .Trending</div>
                            </div>
                            <div className={styles.TrendingContent}>
                                <p>Mumbai Indians</p>
                            </div>
                            <div className={styles.tweets}>5648 Tweets</div>
                        </div>
                        <div className={styles.RightSection}>...</div>
                    </div>
                </div>
                <div className={styles.sections} >
                    <div className={styles.section} >
                        <div className={styles.leftSection}>
                            <div className={styles.leftPart}>
                                <div className={styles.category}>Entertainment</div>
                                <div className={styles.trending}> .Trending</div>
                            </div>
                            <div className={styles.TrendingContent}>
                                <p>Mumbai Indians</p>
                            </div>
                            <div className={styles.tweets}>5648 Tweets</div>
                        </div>
                        <div className={styles.RightSection}>...</div>
                    </div>
                </div>
                <div className={styles.sections} >
                    <div className={styles.section} >
                        <div className={styles.leftSection}>
                            <div className={styles.leftPart}>
                                <div className={styles.category}>Entertainment</div>
                                <div className={styles.trending}> .Trending</div>
                            </div>
                            <div className={styles.TrendingContent}>
                                <p>Mumbai Indians</p>
                            </div>
                            <div className={styles.tweets}>5648 Tweets</div>
                        </div>
                        <div className={styles.RightSection}>...</div>
                    </div>
                </div>

                <div className={styles.showMoreText}>
                    <h2 className={styles.showMore}>Show More</h2>

                </div>
            </div>
        </div>
    )
}
