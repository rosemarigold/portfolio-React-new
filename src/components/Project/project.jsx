import styles from './project.module.css';

export default function Project(props) {
    return <>
        <div className={styles.projectcontainer}>  
            <div className={styles.title}>
                    {props.title}
            </div>
            <div className={styles.description}>
                    {props.description}
            </div>
            <div className={styles.imagegallery}>
                <div className={styles.imageContainer}>{props.children}</div>           
            </div>
        </div>      
    </>
}