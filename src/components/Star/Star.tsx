import React from 'react'
import styles from './star.module.css'

interface StarProps{
   
    height?: string;
    width?: string
    top: string;
    left:string;
    delay?: string
}

export default function Star({width='3px', height="3px", top, left, delay="0s"}: StarProps){
    return(
        <div className={styles.star} style={{width, height, top, left, animationDelay: delay }}></div>
    )
}