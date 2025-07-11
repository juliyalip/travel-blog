import React from "react";
import styles from './header.module.css'


export default function Header(){
    return (
        <header className={styles.header}>
            <nav>
              <a href="#home" className={styles.link}>Home</a>
              <a href="#destinations" className={styles.link}>Destinations</a>
            </nav>
        </header>
    )
}