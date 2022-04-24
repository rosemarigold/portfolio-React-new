import Menu from '../components/Menu/menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return <main>
        <Helmet>
            <meta name="description" content="Home page of the portfolio" />
                <title>Home - Portfolio</title>
        </Helmet>
        
        <Menu />
    </main>
}