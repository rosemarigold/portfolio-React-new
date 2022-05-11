import Menu from '../../components/Menu/menu.jsx';
import Project from '../../components/Project/project.jsx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider/imageSlider.jsx';
import { SliderData } from '../../components/ImageSlider/SliderData.js';

export default function Project3() {
    return <main>
        <Helmet>
            <meta name="description" content="Project3 page" />
                <title>Lamia Ouassaa-Project3</title>
        </Helmet>
        
        <div className="container">  
            <div className="menulayout">
                <Menu />
            </div>  
            <div className="pageslayout">
            <div className="projectcontainer">
                    <Project title="Food Delivery Application" description="iOS Application that can manage orders in a restaurant displaying the menu, the order summary, a map for delivery and the history of orders.">
                    </Project>
                    <ImageSlider slides={SliderData}/>
                    <div className="backlink">
                        <Link to="/Portfolio"> &#8592; Back</Link>
                    </div> 
                </div> 
            </div> 
        </div>
    </main>
}