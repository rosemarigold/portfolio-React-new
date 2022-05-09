import styles from './projectmenu.module.css'; 

export default function ProjectMenu(props) {
    return <>
        <div className={styles.projectmenucontainer}>  
            <div className={styles.projectinfo}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.paragraph}>
                    {props.paragraph}
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.imageContainer}>{props.children}</div>           
            </div>
        </div>
    </>
}