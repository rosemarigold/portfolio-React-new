import styles from './ProjectsMenu.module.css';
import { Link } from 'react-router-dom';

export default function ProjectsMenu() {
    return <div className={styles.projectsMenuContainer}>
        <div className={styles.projectsMenuOptions}>
            <Link to="/Project1">
                <div className={styles.container}>                  
                        <div className={styles.leftContent}>
                            <h1>Interns Management Desktop Application</h1>  
                            <p>Desktop application developed in .NET WinForms Framework that can manage a small business inventory. 
                                User can add, modify, delete, and view items and providers.
                            </p>
                        </div> 
                        <div className={styles.rightImage}>
                            <img src={require('../resources/projectsmenu/project1.jpg')} alt="project1-cover"/> 
                        </div>                              
                </div>
            </Link>  
            <Link to="/Project2">
                <div className={styles.container}>    
                        <div className={styles.leftContent}>
                            <h1>Programs &#38; Inventory Management Desktop Application</h1>
                            <p> Desktop application developed in .NET WPF Framework that can manage interns and their respesctive programs. 
                               User can add, modify, delete, and view programs and interns.</p>
                        </div> 
                        <div className={styles.rightImage}>
                            <img src={require('../resources/projectsmenu/project2.jpg')} alt="project2-cover"/> 
                        </div>                                     
                    
                </div>
            </Link>  
            <Link to="/Project3">
                <div className={styles.container}>    
                        <div className={styles.leftContent}>
                            <h1>Food Delivery iOS Application</h1>
                            <p> Application that can manage orders in a restaurant displaying the menu, the order summary, a map for delivery and the history of orders. </p>
                        </div> 
                        <div className={styles.rightImage}>
                            <img src={require('../resources/projectsmenu/project3.png')} alt="project3-cover"/> 
                        </div>                                     
                    
                </div>
            </Link>  
        </div>
    </div>  
}