import Menu from '../components/Menu/menu.jsx';
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
                
            </div> 
        </div>
    </main>
}