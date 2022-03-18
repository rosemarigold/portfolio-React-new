import Welcome from '../components/Welcome.jsx';
import Menu from '../components/Menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return <main>
        <Helmet>
            <meta name="description" content="Home page of the portfolio" />
                <title>Home - Portfolio</title>
        </Helmet>

        <div className="menucontainer">
            <Menu />
        </div>   
        <div className="welcome">
            <Welcome />
            <div id="nomerreur" class="erreur">sup </div>    
        </div>      
    </main>
}