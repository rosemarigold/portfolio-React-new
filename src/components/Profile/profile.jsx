import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';


export default function Profile() {
    return <>
        <div className={styles.profilecontainer}>  
            <img src={require('../../resources/totoro.gif')} alt="profile" className={styles.profilepicture} />   

            <div className={styles.profileintro}>
                <h1>Hi, I'm Lamia!</h1>
                <div className={styles.dialogbox}>
                    <p>I'm a graduating student passionate about creating fun and interactive application!</p>
                    <p>Check out my <NavLink to="/Portfolio" >portfolio</NavLink> !</p>  
                    
                </div>         
            </div>
        </div>
    </>
}