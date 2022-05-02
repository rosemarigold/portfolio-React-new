import Menu from '../components/Menu/menu.jsx';
import Skill from '../components/Skill/skill.jsx';
import { Helmet } from 'react-helmet-async';

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
                    <img src={require('../resources/skills/web.jpg')} alt="webimage"/>   
                </Skill>

                <Skill title=".NET Framework" paragraph="Developed desktop applications in C# using WPF and WinForm.">
                    <img src={require('../resources/skills/dot_net_framework.png')} alt="dotNetFramework"/>   
                </Skill>
                <Skill title="C# &#38; C++" paragraph="Built desktop applications and simple video games for academic projects.">
                    <img src={require('../resources/skills/csharp_cplusplus.jpg')} alt="C++/C#"/>   
                </Skill>
                <Skill title="Java" paragraph="Built mobile applications for Android using Android Studio.">
                    <img src={require('../resources/skills/java.png')} alt="dotNetFramweork"/>   
                </Skill>
                <Skill title="Swift" paragraph="Built mobile applications for iOS using Xcode.">
                    <img src={require('../resources/skills/swift.png')} alt="webimage"/>   
                </Skill>
                <Skill title="SQL" paragraph="Used to host websites and projects. Utilised MySQL, SQL Server, MongoDB &#38; Cassandra.">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z"/></svg>  
                </Skill>
                  
                </div> 

            </div> 

        </div>

    </main>
}