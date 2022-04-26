import Menu from '../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
    return <main>
        <Helmet>
            <meta name="description" content="Contact page" />
                <title>Lamia Ouassaa-Contact</title>
        </Helmet>
        
        <div className="container">  
            <div className="menulayout">
                <Menu />
            </div>  
            <div className="pageslayout">
                
            </div> 
        </div>
    </main>
}