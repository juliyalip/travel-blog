import GaleryItem, { GaleryItemData } from "../GaleryItem/GaleryItem"
import styles from './galeryList.module.css'

interface GaleryListProp {
    items: GaleryItemData[],
}

export default function GaleryList({ items }: GaleryListProp) {
    return (
        <section className={styles.grid} id="home">

            {items.map((item, index) => (
                <GaleryItem key={item.id}   {...item} index={index} />
            ))}
        </section>
    )
}