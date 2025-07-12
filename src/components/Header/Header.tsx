import { useState, useRef } from 'react'
import { useScroll, useMotionValueEvent, motion, easeOut } from "framer-motion"
import styles from './header.module.css'

export default function Header() {
    const { scrollY } = useScroll()
    const lastScroll = useRef(0)
    const [visible, setVisible] = useState(true)

    useMotionValueEvent(scrollY, 'change', (current) => {
        const scrollTop = current
        if (scrollTop < 50) {
            setVisible(true)
        } else if (scrollTop > lastScroll.current) {
            setVisible(false)
        } else {
            setVisible(true)
        }
        lastScroll.current = scrollTop
    })

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className={styles.header}
        >
            <nav className={styles.nav}>
                <a href="#home" className={styles.link}>Home</a>
                <a href="#gallery" className={styles.link}>Gallery</a>
            </nav>
        </motion.header>
    )
}
