import Menu from '../../components/Menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Project3() {
    return <main>
         <Helmet>
            <meta name="description" content="Project3 page of the portfolio" />
            <title>Project3 - Portfolio</title>
        </Helmet>
        <div className="menucontainer">
            <Menu />
        </div>  
    </main>
}