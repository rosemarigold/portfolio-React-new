import styles from './ProjectComp.module.css';

export default function ProjectComp(props) {

   /* return <div className={styles.container}>
        <div className={styles.title}> 
            <div className={styles.paragraph}>
                <h1>{props.title}</h1> 
                <div>{props.paragraph}</div>
            </div>
            <div className={styles.body}>
                <div className={styles.imageContainer}>{props.children}</div>           
            </div>
        </div>
    </div>
    }*/
    return <div className={styles.container}>
        <div className={styles.projectdiv}>
            <div className={styles.paragraph}>
                <h1>{props.title}</h1> 
                <div>{props.paragraph}</div>
            </div>
            <div className={styles.body}>
                <div className={styles.imageContainer}>{props.children}</div>           
            </div>
        </div>
</div>
}
