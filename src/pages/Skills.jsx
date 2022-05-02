import Menu from '../components/Menu/menu.jsx';
import Skill from '../components/Skill/skill.jsx';
import { Helmet } from 'react-helmet-async';

import Image from '../components/Image/image';
import image1 from '../resources/skills/web.jpg';
import styles from '../components/Image/image.module.css';

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

                </Skill>
                <Skill title=".NET Framework" paragraph="Developed desktop applications in C# using WPF and WinForm.">
                    
                </Skill>
                <Skill title="C# &#38; C++" paragraph="Built various academic project such as desktop applications and simple video games.">
                    
                </Skill>
                <Skill title="Java" paragraph="Built mobile applications for Android using Android Studio.">
                    
                </Skill>
                <Skill title="Swift" paragraph="Built mobile applications for iOS using Xcode.">
                    
                </Skill>
                <Skill title="SQL Server" paragraph="Used to host websites and applications. Used MySQL, MongoDB &#38; Cassandra.">
                    
                </Skill>
                  
                </div> 

            </div> 

        </div>

    </main>
}