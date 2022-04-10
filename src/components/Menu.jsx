import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return <>
        <div className={styles.menu}>
            <div className={styles.name}>
                Lamia Ouassaa
            </div>
            <div className={styles.options}>
                <h1><NavLink to="/" className={ ({isActive}) => isActive ? styles.active : styles.notactive}>Home</NavLink></h1>
                <h1><NavLink to="/ProjectsMainPage" className={ ({isActive}) => isActive ? styles.active : styles.notactive}>Projects</NavLink></h1>
                <h1><NavLink to="/Contact" className={ ({isActive}) => isActive ? styles.active : styles.notactive}>Contact</NavLink></h1> 
            </div>             
        </div>  
    </>
}