import Menu from '../../components/Menu/menu.jsx';
import Project from '../../components/Project/project.jsx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Project2() {
    return <main>
        <Helmet>
            <meta name="description" content="Project2 page" />
                <title>Lamia Ouassaa-Project2</title>
        </Helmet>
        
        <div className="container">  
            <div className="menulayout">
                <Menu />
            </div>  
            <div className="pageslayout">
                <div className="projectcontainer">
                    <Project title="Inventory Management Application" description="Desktop application developed in .NET WinForms Framework that can manage a small business inventory. 
                        Users can add, modify, delete, and view items and providers."/>
                    <div className="backlink">
                        <Link to="/Portfolio"> &#8592; Back</Link>
                    </div>  
                </div>            
            </div>  
        </div>
    </main>
}