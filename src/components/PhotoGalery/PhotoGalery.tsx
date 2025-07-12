import styles from './photoGalery.module.css'


interface Image {
    path: string,
    alt: string
}

interface PhotoGaleryProp {
    images: Image[]
}

export default function PhotoGalery({ images }: PhotoGaleryProp) {
    return (
        <section id="gallery" className={styles.masonry}>
            {images.map(({ path, alt }) => (
                <img key={alt} src={path} alt={alt} />
            ))}
        </section>
    )
}