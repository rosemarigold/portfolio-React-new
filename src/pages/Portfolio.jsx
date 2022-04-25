import Menu from '../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
    return <main>
        <Helmet>
            <meta name="description" content="Portfolio page" />
                <title>Lamia Ouassaa-Portfolio</title>
        </Helmet>
        
        <Menu />
    </main>
}