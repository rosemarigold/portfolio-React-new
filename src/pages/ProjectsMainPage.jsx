import ProjectsMenu from '../components/ProjectsMenu.jsx';
import Menu from '../components/Menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function ProjectsMainPage() {
    
    return <>
        <Helmet>
            <meta name="description" content="Project menu page of the portfolio" />
            <title>Projects - Portfolio</title>
        </Helmet>

        <div className="menucontainer">
            <Menu />
        </div>   
        <div className="githubdiv">
            Check out my projects on <a target="_blank" href="https://github.com/rosemarigold">GitHub</a>!
        </div> 
            <ProjectsMenu />
    </>
}