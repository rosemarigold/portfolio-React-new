import styles from './ContactComp.module.css';

export default function ContactComp() {

    // to print in to console the contact info
    const printForm = () => {
        // capture htmml elements
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let subject = document.getElementById('subject');
        let description = document.getElementById('description');

        console.log('Button clicked.');
        // print form information
        console.log("Name: " + name.value + 
                        "\nEmail: " + email.value +
                        "\nSubject: " + subject.value +
                        "\nDescription: " + description.value  );
    }
    // verify name
    const validerNom = () => {
        // variables
        const form = document.getElementById('contactForm');
        const nom = document.getElementById('name');
        const nomErreur = document.getElementById('nom-erreur');

        // objet validity, vérifie si l'input est valide
        // Enlève la classe active (style.css)
        if(nom.validity.valid){ 
            nomErreur.classList.remove('active'); 
            printForm();
        }
        // si l'input n'est pas valide, ajoute la classe active (style.css)
        else{  
            nomErreur.classList.add('active'); 
            // si le champ est vide
            // valueMissing, tooShort, tooLong = propriété de validation
            if(nom.validity.valueMissing){
                nomErreur.innerText = 'Veuillez entrer votre nom complet.';
            }
            else if(nom.validity.tooShort){
                nomErreur.innerText = 'Votre nom est trop court.';
            }
            else if(nom.validity.tooLong){
                nomErreur.innerText = 'Votre nom est trop long.';
            }
        }
    }
    
    return <>
        <div className={styles.ContactComp}> 
            <p className={styles.contactparagraph}>Interested in hiring me for your project or just want to say hi?  <br /> 
                    You can fill in the contact form below <br /> or send me an email to&nbsp;
                    <a href="mailto:lamia_ouassaa@outlook.com">lamia_ouassaa@outlook.com</a>
            </p>           
            <div className={styles.contactcontainer}>      
                <form className={styles.contactform} id="contactForm" noValidate>
                        <div className={styles.contactformheader}>
                            <label>
                                <input type="text" id="name" className={styles.nom} required minLength="5" maxLength="30" placeholder="Name"/>
                            </label>
                            <div id="nom-erreur" class="erreur"> </div>
                            <label>
                                <input type="email" id="email" className={styles.courriel} required placeholder="Email"/>
                            </label>
                        </div>
                        <label>
                            <input type="text" id="subject" className={styles.sujet} required minLength="1" maxLength="30" placeholder="Subject"/>
                        </label>
                        <label>
                            <textarea className={styles.message} id="description" placeholder="Message" required minLength="1" maxLength="300"></textarea>    
                        </label>
                        <input /*onClick={printForm}*/ onClick={validerNom} className={styles.contactsubmit} type="button" value="Send now"></input>
                    
                </form>
            </div>               
        </div>  
    </>
}
<script type="module" src='../validation.js'></script>
