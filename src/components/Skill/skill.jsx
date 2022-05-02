import styles from './skill.module.css';


const image1 = "";
export default function Skill(props) {
    return <>
        <div className={styles.skillcontainer}>  
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.paragraph}>
                {props.paragraph}
            </div>
            <div className={styles.image}>
                <div className={styles.imageContainer}>{props.children}</div>           
            </div>
        </div>
    </>
}