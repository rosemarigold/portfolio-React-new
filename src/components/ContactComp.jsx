import styles from './ContactComp.module.css';
import { useRef, useState } from 'react';

export default function ContactComp() {

    //
    const nameInput = useRef(null);

    // # verify name
    const [messageErreurName, setMessageErreurName] = useState('');
    const validateName = () => {
        if (nameInput.current.validity.valid) {
            setMessageErreurName('');
            return true;
        }
        else {
            if (nameInput.current.validity.valueMissing) {
                setMessageErreurName('Your name is missing.');
            }
            else if (nameInput.current.validity.typeMismatch) {
                setMessageErreurName('Mismatch type.');
            }
        }
    }   

    // submit
    const submitForm = (event) => {
        // to disable automatic refresh on page on submit event
        event.preventDefault(); 
       
        //
        if(validateName()){
            if (nameInput.current/* && 
            event.currentTarget.checkValidity()*/) {
            // print info
            console.log("Name: " + nameInput.current.value);
            }
        }
        

        //

    }
     
    // validate email
    /*const validateEmail = () => {
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
    }*/
    // verify subject
    /*const validateSubject = () => {
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
    } */
    // validate description    
    /*const validateDescription = () => {
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
    }    */  
    // validate all inputs
    /*const validateInputs = () => {
        // if all inputs are valid, print info into the console
        if(validateName() && validateEmail() && validateSubject() && validateDescription()){
            printForm();
        }
        else{
            console.log("nope");
        }
    }*/

    return <>
        <div className={styles.ContactComp}> 
            <p className={styles.contactparagraph}>Interested in hiring me for your project or just want to say hi?  <br /> 
                    You can fill in the contact form below <br /> or send me an email to&nbsp;
                    <a href="mailto:lamia_ouassaa@outlook.com">lamia_ouassaa@outlook.com</a>
            </p>           
            <div className={styles.contactcontainer}>  
                <form className={styles.contactform} noValidate onSubmit={submitForm}>
                        <div className={styles.contactformheader}>
                            <label>
                                <input type="text" className={styles.nom} required minLength="2" maxLength="30" placeholder="Name" ref={nameInput} onChange={validateName} onBlur={validateName} />
                            </label>
                            <label>
                                <input type="email" className={styles.courriel} required placeholder="Email" /*onChange={validateEmail}*//>
                            </label>
                        </div>
                        <label>
                            <input type="text" className={styles.sujet} required minLength="1" maxLength="30" placeholder="Subject" /*onChange={validateSubject}*/ />
                        </label>
                        <label>
                            <textarea className={styles.message} placeholder="Message" required minLength="1" maxLength="500" /*onChange={validateDescription}*/ ></textarea>    
                        </label>
                        <input className={styles.contactsubmit} type="submit" value="Send now"></input>
                        {messageErreurName !== '' &&
                            <div className={styles.erreur}>{messageErreurName}</div>
                        } 
                </form>
            </div>               
        </div>  
    </>
}
