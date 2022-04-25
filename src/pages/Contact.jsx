import Menu from '../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
    return <main>
        <Helmet>
            <meta name="description" content="Contact page" />
                <title>Lamia Ouassaa-Contact</title>
        </Helmet>
        
        <Menu />
    </main>
}