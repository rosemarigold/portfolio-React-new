import Menu from '../components/Menu/menu.jsx';
import ProjectMenu from '../components/ProjectMenu/projectmenu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
    return <main>
        <Helmet>
            <meta name="description" content="Portfolio page" />
                <title>Lamia Ouassaa-Portfolio</title>
        </Helmet>
        
        <div className="container">  
            <div className="menulayout">
                <Menu />
            </div>  
            <div className="pageslayout">
                <div className="portfoliocontainer">
                    <div className="githubdiv">
                        Check out my projects on <a target="_blank" href="https://github.com/rosemarigold">GitHub</a>!
                    </div> 
                    <div className="projectscontainer">
                        <ProjectMenu title="Interns Management Application" paragraph="Desktop application developed in .NET WinForms Framework that can manage a small business inventory.">
                            <img src={require('../resources/projectsmenu/project1.jpg')} alt="project1"/>   
                        </ProjectMenu>
                        <ProjectMenu title="Inventory Management Application" paragraph="Desktop application developed in .NET WPF Framework that can manage interns and their respesctive programs.">
                            <img src={require('../resources/projectsmenu/project2.jpg')} alt="project2"/>   
                        </ProjectMenu>
                        <ProjectMenu title="Interns Food Delivery Application" paragraph="iOS Application that can manage orders in a restaurant displaying the menu, the order summary, a map for delivery and the history of orders.">
                            <img src={require('../resources/projectsmenu/project3.jpg')} alt="project2"/>   
                        </ProjectMenu>
                    </div>
                </div>
            </div> 
        </div>
    </main>
}