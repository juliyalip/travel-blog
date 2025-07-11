import classNames from 'classnames';
import styles from './typografy.module.css'

interface TextProp {
    content: string;
    title?: string
    type: "description" | "paragraph"
}

export default function Typogrefy({ content, type, title }: TextProp) {
    const styleDesc = classNames(styles.base,{
        [styles.paragraph]: type === 'paragraph',
        [styles.description]: type === "description"
    })
   
    return (
        <div className={styleDesc}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <p className={styles.text}>{content}</p>
        </div>
    )
}