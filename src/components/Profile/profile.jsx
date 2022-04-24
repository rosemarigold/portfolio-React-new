import styles from './profile.module.css';

export default function Profile() {
    return <>
        <div className={styles.profilecontainer}>  
            <img src={require('../../resources/totoro.gif')} alt="profile" className={styles.profilepicture} />    
            <img src={require('../../resources/totoro.gif')} alt="profile" className={styles.profilepicture} />    
        </div>
    </>
}