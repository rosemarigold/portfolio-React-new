import Menu from '../components/Menu/menu.jsx';
import Skill from '../components/Skill/skill.jsx';
import { Helmet } from 'react-helmet-async';

// <a href="https://www.flaticon.com/free-icons/portal" title="portal icons">Portal icons created by Pixel perfect - Flaticon</a>

export default function Skills() {
    return <main>
        <Helmet>
            <meta name="description" content="Portfolio page" />
                <title>Lamia Ouassaa-Skills</title>
        </Helmet>
        
        <div className="container">  

            <div className="menulayout">
                <Menu />
            </div>  

            <div className="pageslayout">
                <div className="skillscontainer">
                    <Skill title="HTML, CSS &#38; JS" paragraph="Developed websites using Node.js, Express.js and React.">
                        <img src={require('../resources/skills/web.png')} alt="webimage"/>   
                    </Skill>

                    <Skill title=".NET Framework" paragraph="Developed desktop applications in C# using WPF and WinForm.">
                        <img src={require('../resources/skills/dot_net_framework.png')} alt="dotNetFramework"/>   
                    </Skill>
                    <Skill title="C# &#38; C++" paragraph="Built desktop applications and simple video games for academic projects.">
                        <img src={require('../resources/skills/csharp_cplusplus.png')} alt="C++/C#"/>   
                    </Skill>
                    <Skill title="Java" paragraph="Built mobile applications for Android using Android Studio.">
                        <img src={require('../resources/skills/java.png')} alt="dotNetFramweork"/>   
                    </Skill>
                    <Skill title="Swift" paragraph="Built mobile applications for iOS using Xcode.">
                        <img src={require('../resources/skills/swift.png')} alt="webimage"/>   
                    </Skill>
                    <Skill title="SQL" paragraph="Used to host websites and projects. Utilised MySQL, SQL Server, MongoDB &#38; Cassandra.">
                        <img src={require('../resources/skills/sql.png')} alt="sql"/>  
                    </Skill>
                </div> 
            </div> 

        </div>

    </main>
}