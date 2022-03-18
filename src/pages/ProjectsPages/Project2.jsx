import Menu from '../../components/Menu.jsx';
import ProjectComp from '../../components/ProjectComp.jsx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Project2() {
    return <main>
        <Helmet>
            <meta name="description" content="Project2 page of the portfolio" />
            <title>Project2 - Portfolio</title>
        </Helmet>
        <div className="menucontainer">
            <Menu />
        </div> 
        <div className="backlinkcontainer">
            <div className="backlink">
                <Link to="/ProjectsMainPage"> &#8592; Back</Link>
            </div>
        </div>    
        <ProjectComp title="Interns Management" 
                    paragraph="Desktop application developed in .NET WPF Framework that can manage interns and their respesctive programs. 
                    Users can add, modify, delete, and view programs and interns.">
                <div className='projet2photos'>
                    <p>Interface #1: To add, modify and delete programs.
                        <br />Each program is defined by an unique ID, a name and a duration.
                        <br />A datagrid displays all regirstered interns.</p>
                    <img src={require('../../resources/project2/program_management.png')} alt="project2-photo3" width="auto" height="auto"/> 
                    <p>Interface #2: To add, modify and delete interns. 
                        <br />Each interns is defined by an unique ID, a name, an age, a gender and a program. 
                        <br />A datagrid displays all regirstered interns.</p>
                    <img src={require('../../resources/project2/interns.png')} alt="project2-photo2" width="auto" height="auto"/> 
                    <p>Interface #3: To consult interns according to their program via a datagrid.</p>
                    <img src={require('../../resources/project2/consult.png')} alt="project2-photo1" width="auto" height="auto"/> 
                </div>
        </ProjectComp>
        <div className="backlinkcontainer">
            <div className="toplink">
                <a href="#top">&#8593; Back to top of page</a>
            </div>
        </div>    
    </main>
}