import Menu from '../../components/Menu/menu.jsx';
import Project from '../../components/Project/project.jsx';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

import ImageSlider1 from '../../components/ImageSlider1/imageSlider1.jsx';
import { SliderData1 } from '../../components/ImageSlider1/SliderData1.js';

export default function Project1() {

    return <main>
        <Helmet>
            <meta name="description" content="Project1 page" />
                <title>Lamia Ouassaa-Project1</title>
        </Helmet>
        
        <div className="container">  
            <div className="menulayout">
                <Menu />
            </div>  
            <div className="pageslayout">
                <div className="projectcontainer">
                    <Project title="Interns Management Application" description="Desktop application developed in .NET WPF Framework that can manage interns and their respesctive programs. 
                    Users can add, modify, delete, and view programs and interns.">
                    </Project>
                    <ImageSlider1 slides={SliderData1}/>
                </div> 
                <div className="backlink">
                        <Link to="/Portfolio"> &#8592; Back</Link>
                </div> 
            </div> 
        </div>
    </main>
}