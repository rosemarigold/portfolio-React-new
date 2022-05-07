import Menu from '../../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Project2() {
    return <main>
        <Helmet>
            <meta name="description" content="Project2 page" />
                <title>Lamia Ouassaa-Project2</title>
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