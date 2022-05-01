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

                <Skill title="Hi" paragraph="smt smt">
                         
                 </Skill>
                 <div className={styles.imageContainer}>
                        <Image source={image1}/>         
                    </div>   
                

            </div> 

        </div>

    </main>
}