import Menu from '../../components/Menu.jsx';
import ProjectComp from '../../components/ProjectComp.jsx';
import { Helmet } from 'react-helmet-async';

export default function Project1() {
    return <main>
        <Helmet>
            <meta name="description" content="Project1 page of the portfolio" />
            <title>Project1 - Portfolio</title>
        </Helmet>
        <div className="menucontainer">
            <Menu />
        </div>  
        <ProjectComp title="Inventory Management Desktop Application" 
                    paragraph="Desktop application developed in .NET WinForms Framework that can manage a small business inventory. 
                    Users can add, modify, delete, and view items and providers.">
                <div className="projet1photos">
                    <p>Interface #1: Can view items in the inventory and their general information.</p>
                    <img src={require('../../resources/project1/test2.png')} alt="project1-photo1"/> 
                    <p>Interface #2: Can add items and their respective provider.</p>
                    <img src={require('../../resources/project1/myinventory_add.png')} alt="project1-photo2"/> 
                    <p>Interface #3: Can delete items from the inventory.</p>
                    <img src={require('../../resources/project1/myinventory_delete.png')} alt="project1-photo3" width="auto" height="auto"/> 
                    <p>Interface #4: Can modify items from the inventory.</p>
                    <img src={require('../../resources/project1/myinventory_modify.png')} alt="project1-photo4" width="auto" height="auto"/> 
                    <p>Interface #5: To search items in the inventory.</p>
                    <img src={require('../../resources/project1/search.png')} alt="project1-photo6" width="auto" height="auto"/> 
                    <p>Interface #6: When the current quantity of an item goes below the minimum quantity, the item appears in this shopping list.</p>
                    <img src={require('../../resources/project1/shopping_cart.png')} alt="project1-photo7" width="auto" height="auto"/>                   
                </div>
        </ProjectComp>
    </main>
}