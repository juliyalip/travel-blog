import React from "react"
import Star from "../Star/Star"
import skyLight from '../../images/sky_light.png'
import sky from '../../images/sky.png'
import station from '../../images/station.jpg'
import styles from './banner.module.css'

export default function Banner() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Explore. Dream. Create</h1>
            <div className={styles.wrapper}>
                <img src={skyLight} alt="lighter sky" className={styles.skyLight} />
                <img src={sky} alt="night sky" className={styles.skyImg} />
                <Star top="30px" left="50px" />
                <Star top="35px" left="300px" width="4px" height="4px" delay="1.5s" />
                <Star top="50px" left="60px" width="2px" height="2px" delay="2.2s" />
                <img src={station} alt="old station" className={styles.stationImg} />
            </div>

        </div>
    )
}