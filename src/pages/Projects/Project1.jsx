import Menu from '../../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

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
                
            </div> 
        </div>
    </main>
}