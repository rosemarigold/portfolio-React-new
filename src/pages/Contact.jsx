import ContactComp from '../components/ContactComp.jsx';
import Menu from '../components/Menu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Contact() {

    return <main>
        <Helmet>
            <meta name="description" content="Contact page of the portfolio" />
                <title>Contact - Portfolio</title>
        </Helmet>

        <div className="menucontainer">
            <Menu />
        </div>  
        <div className="contactcontainer">
            <ContactComp />
        </div>
    </main>
}