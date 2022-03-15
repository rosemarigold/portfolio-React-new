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
                            {/*<img src={require('../resources/project1/test2.png')} alt="project1-photo1"/> */}
                            <img src={require('../resources/projectsmenu/image1.jpg')} alt="project1-photo1"/> 
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
                            {/*<img src={require('../resources/project2/interns.png')} alt="project2-photo2"/> */}
                            <img src={require('../resources/projectsmenu/image2.jpg')} alt="project1-photo1"/> 
                        </div>                                     
                    
                </div>
            </Link>  
            {/*<div className={styles.container}>
                <h1><Link to="/Project3">Project3</Link></h1>             
            </div>      
            */}
        </div>
    </div>  
}