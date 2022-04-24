import Menu from '../../components/Menu.jsx';
import { Helmet } from 'react-helmet-async';
import ProjectComp from '../../components/ProjectComp.jsx';
import { Link } from 'react-router-dom';

export default function Project3() {
    return <main>
         <Helmet>
            <meta name="description" content="Project3 page of the portfolio" />
            <title>Project3 - Portfolio</title>
        </Helmet>
        <div className="menucontainer">
            <Menu />
        </div>  
        <div className="backlinkcontainer">
            <div className="backlink">
                <Link to="/ProjectsMainPage"> &#8592; Back</Link>
            </div>
        </div> 
        <ProjectComp title="Food Delivery iOS Application" 
                    paragraph="Application that can manage orders in a restaurant displaying the menu, the order summary, a map for delivery and the history of orders.">
                <div className="projet3photos">
                    <p>Interface #1: Home page.</p>
                    <img src={require('../../resources/project3/phone1.png')} alt="project3-photo1"/> 

                    <p>Interface #2: Restaurant Menu. The main dishes can be added as solo items or in combo.</p>
                    <img src={require('../../resources/project3/phone2.png')} alt="project3-photo2"/> 

                    <p>Interface #3: Order summary.</p>
                    <img src={require('../../resources/project3/phone3.png')} alt="project3-photo3"/>  

                    <p>Interface #4: Map to submit the delivery address.</p>
                    <img src={require('../../resources/project3/phone4.png')} alt="project3-photo4"/>        

                    <p>Interface #5: Page to confirm the order.</p>
                    <img src={require('../../resources/project3/phone5.png')} alt="project3-photo5"/>   

                    <p>Interface #6: Order history.</p>
                    <img src={require('../../resources/project3/phone7.png')} alt="project3-photo7"/>             
                </div>
        </ProjectComp>
        <div className="backlinkcontainer">
            <div className="toplink">
                <a href="#top">&#8593; Back to top of page</a>
            </div>
        </div>  
    </main>
}