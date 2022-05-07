import Menu from '../../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

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
                
            </div> 
        </div>
    </main>
}