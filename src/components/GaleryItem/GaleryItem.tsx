import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Typogrefy from "../Typografy/Typografy";
import styles from './galeryItem.module.css'

export type GaleryItemData = {
    path: string;
    title?: string
    description: string
    id: string
    delay?: number
}

type GaleryItemProps = GaleryItemData & { index: number }

export default function GaleryItem({ path, title, description, index }: GaleryItemProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

    return (<motion.div
        ref={ref}
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
    >
        <img src={path} alt={title} className={styles.image} />
        <motion.div className={styles.textWrapper} style={{ y }}>
            <Typogrefy title={title} content={description} type="paragraph" />
        </motion.div>
    </motion.div>


    )
}