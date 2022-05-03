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
                <ProjectMenu title="project1" paragraph="smt smt">
                    <img src={require('../resources/projectsmenu/project1.jpg')} alt="webimage"/>   
                </ProjectMenu>
                <ProjectMenu title="project2" paragraph="smt smt">
                    <img src={require('../resources/projectsmenu/project2.jpg')} alt="webimage"/>   
                </ProjectMenu>
                <ProjectMenu title="project3" paragraph="smt smt">
                    <img src={require('../resources/projectsmenu/project3.jpg')} alt="webimage"/>   
                </ProjectMenu>
            </div> 
        </div>
    </main>
}