import Menu from '../components/Menu/menu.jsx';
import Profile from '../components/Profile/profile.jsx';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return <main>
        <Helmet>
            <meta name="description" content="Home page" />
                <title>Lamia Ouassaa-Home</title>
        </Helmet>

        <div className="maincontainer">
            <div className="leftpanel">
                <Menu />
            </div>
            <div className="rightpanel">
                <Profile />
            </div>     
        </div>  
    </main>
}