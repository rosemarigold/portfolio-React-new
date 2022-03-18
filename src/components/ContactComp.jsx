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
    const validateName = () => {

        const nom = document.getElementById('name');
        const nomErreur = document.getElementById('nomerreur');
        
        // objet validity, vérifie si l'input est valide, enlève la classe active (style.css)
        if(nom.validity.valid){ 
            nomErreur.classList.remove('active'); 
            nomErreur.classList.add('tohide');
            nom = ''; 
            return true;
        }
        // si l'input n'est pas valide, ajoute la classe active (style.css)
        else{  
            nomErreur.classList.add('active'); 
            // si le champ est vide
            // valueMissing, tooShort, tooLong = propriété de validation
            if(nom.validity.valueMissing){
                nomErreur.innerText = 'Your name is missing, please enter your full name.';
                nom = ''; 
            }
            else if(nom.validity.tooShort){
                nomErreur.innerText = 'Your name is too short, please enter a name between 1 to 30 characters';
                nom = ''; 
            }
            else if(nom.validity.tooLong){
                nomErreur.innerText = 'Your name is too long, please enter a name between 1 to 30 characters.';
                nom = ''; 
            }
        }
    }
    // validate email
    const validateEmail = () => {
        const courriel = document.getElementById('email');
        const courrielErreur = document.getElementById('nomerreur');

        // objet validity, vérifie si l'input est valide, enleve la classe active (style.css)
        if(courriel.validity.valid){ 
            courrielErreur.classList.remove('active'); 
            //courrielErreur.classList.add('tohide'); 
            return true;
        }
        // si l'input n'est pas valide, ajoute la classe active (style.css)
        else{  
            courrielErreur.classList.add('active'); 
            // si le champ est vide
            if(courriel.validity.valueMissing){
                courrielErreur.innerText = 'Your email is missing, please enter your full email.';
            }
            // si un @ est manquant
            else if(courriel.validity.typeMismatch){
                courrielErreur.innerText = 'Please enter a valid email format.';
            }
        }
    }
    // verify subject
    const validateSubject = () => {
        const subject = document.getElementById('subject');
        const subjectErreur = document.getElementById('nomerreur');

        // objet validity, vérifie si l'input est valide, enlève la classe active (style.css)
        if(subject.validity.valid){ 
            subjectErreur.classList.remove('active'); 
            //nomErreur.classList.add('tohide'); 
            return true;
        }
        // si l'input n'est pas valide, ajoute la classe active (style.css)
        else{  
            subjectErreur.classList.add('active');  
            // si le champ est vide
            // valueMissing, tooShort, tooLong = propriété de validation
            if(subject.validity.valueMissing){
                subjectErreur.innerText = 'The subject is missing, please enter it.';
            }
            else if(subject.validity.tooLong){
                subjectErreur.innerText = 'The subject is too long, please enter a subject between 1 to 30 characters.';
            }
        }
    } 
    // validate description    
    const validateDescription = () => {
        const description = document.getElementById('description');
        const descriptionErreur = document.getElementById('nomerreur');
        // objet validity, vérifie si l'input est valide, enlève la classe active (style.css)
        if(description.validity.valid){ 
            descriptionErreur.classList.remove('active'); 
            //nomErreur.classList.add('tohide'); 
            return true;
        }
        // si l'input n'est pas valide, ajoute la classe active (style.css)
        else{  
            descriptionErreur.classList.add('active');  
            // si le champ est vide
            // valueMissing, tooShort, tooLong = propriété de validation
            if(description.validity.valueMissing){
                descriptionErreur.innerText = 'The description is missing, please enter it.';
            }
            else if(description.validity.tooLong){
                descriptionErreur.innerText = 'The  description is too long.';
            }
        }
    }      
    // validate all inputs
    const validateInputs = () => {
        // if all inputs are valid, print info into the console
        if(validateName() && validateEmail() && validateSubject() && validateDescription()){
            printForm();
        }
        else{
            console.log("nope");
        }
    }

    return <>
        <div className={styles.ContactComp}> 
            <p className={styles.contactparagraph}>Interested in hiring me for your project or just want to say hi?  <br /> 
                    You can fill in the contact form below <br /> or send me an email to&nbsp;
                    <a href="mailto:lamia_ouassaa@outlook.com">lamia_ouassaa@outlook.com</a>
            </p>           
            <div className={styles.contactcontainer}>  
                <form className={styles.contactform} id="contactForm" >
                        <div className={styles.contactformheader}>
                            <label>
                                <input type="text" id="name" className={styles.nom} required minLength="2" maxLength="30" placeholder="Name" /*onChange={validateName}*/ />
                            </label>
                            <label>
                                <input type="email" id="email" className={styles.courriel} required placeholder="Email" /*onChange={validateEmail}*//>
                            </label>
                        </div>
                        <label>
                            <input type="text" id="subject" className={styles.sujet} required minLength="1" maxLength="30" placeholder="Subject" /*onChange={validateSubject}*/ />
                        </label>
                        <label>
                            <textarea className={styles.message} id="description" placeholder="Message" required minLength="1" maxLength="500" /*onChange={validateDescription}*/ ></textarea>    
                        </label>
                        <input onClick={validateInputs} className={styles.contactsubmit} type="button" value="Send now"></input>
                        <div id="nomerreur" class="erreur"> </div>    
                </form>
            </div>               
        </div>  
    </>
}
