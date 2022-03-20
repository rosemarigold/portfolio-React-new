import styles from './ContactComp.module.css';
import { useRef, useState } from 'react';

export default function ContactComp() {

    // get HTML element
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const descriptionInput = useRef(null);

    // #1 verify name
    const [messageErreurName, setMessageErreurName] = useState('');
    const validateName = () => {
        if (nameInput.current.validity.valid) {
            setMessageErreurName('');
            // if valid, return true
            return true;
        }
        else {
            if (nameInput.current.validity.valueMissing) {
                setMessageErreurName('Your name is missing.');
            }
            else if (nameInput.current.validity.typeMismatch) {
                setMessageErreurName('Please enter a valid name.');
            }
        }
    }   
    // #2 verify email 
    const [messageErreurEmail, setMessageErreurEmail] = useState('');
    const validateEmail = () => {
        if (emailInput.current.validity.valid) {
            setMessageErreurEmail('');
            // if valid, return true
            return true;
        }
        else {
            if (emailInput.current.validity.valueMissing) {
                setMessageErreurEmail('Your email is missing.');
            }
            else if (emailInput.current.validity.typeMismatch) {
                setMessageErreurEmail('Please enter a valid email.');
            }
        }
    }
    // #3 verify subject
    const [messageErreurSubject, setMessageErreurSubject] = useState('');
    const validateSubject = () => {
        if (subjectInput.current.validity.valid) {
            setMessageErreurSubject('');
            // if valid, return true
            return true;
        }
        else {
            if (subjectInput.current.validity.valueMissing) {
                setMessageErreurSubject('The subject is missing.');
            }
            else if (subjectInput.current.validity.typeMismatch) {
                setMessageErreurSubject('Please enter a valid subject.');
            }
        }
    }
    // #4 verify subject
    const [messageErreurDescription, setMessageErreurDescription] = useState('');
    const validateDescription = () => {
        if (descriptionInput.current.validity.valid) {
            setMessageErreurDescription('');
            // if valid, return true
            return true;
        }
        else {
            if (descriptionInput.current.validity.valueMissing) {
                setMessageErreurDescription('The description is missing.');
            }
            else if (descriptionInput.current.validity.typeMismatch) {
                setMessageErreurDescription('Please enter a valid description.');
            }
        }
    }

    // #5 submit
    const [messageEmailSent, setMessageEmailSent] = useState('');
    const submitForm = (event) => {
        // to disable automatic refresh on page on submit event
        event.preventDefault(); 
       
        //
        if(validateName() && validateEmail() && validateSubject() && validateDescription()){
            if (nameInput.current && emailInput.current && subjectInput.current && descriptionInput.current/* && 
            event.currentTarget.checkValidity()*/) {
            // print info
            console.log("Name: " + nameInput.current.value);
            console.log("Email: " + emailInput.current.value);
            console.log("Email: " + subjectInput.current.value);
            console.log("Description: " + descriptionInput.current.value);

            // empty inputs
            nameInput.current.value = '';
            emailInput.current.value = '';
            subjectInput.current.value = '';
            descriptionInput.current.value = '';
            
            setMessageEmailSent('Your email was sent!');
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
                <form className={styles.contactform} noValidate onSubmit={submitForm}>
                        <div className={styles.contactformheader}>
                            <label>
                                <input type="text" className={styles.nom} required minLength="1" maxLength="30" placeholder="Name" ref={nameInput} onChange={validateName} onBlur={validateName} />
                            </label>
                            <label>
                                <input type="email" className={styles.courriel} required placeholder="Email" ref={emailInput} onChange={validateEmail} onBlur={validateEmail} />
                            </label>
                        </div>
                        <label>
                            <input type="text" className={styles.sujet} required minLength="1" maxLength="30" placeholder="Subject" ref={subjectInput} onChange={validateSubject} onBlur={validateSubject} />
                        </label>
                        <label>
                            <textarea className={styles.message} placeholder="Message" required minLength="1" maxLength="500" ref={descriptionInput} onChange={validateDescription} onBlur={validateDescription} ></textarea>    
                        </label>
                        <input className={styles.contactsubmit} type="submit" value="Send now"></input>
                        {messageErreurName !== '' &&
                            <div className={styles.erreur}>{messageErreurName}</div>
                        } 
                        {messageErreurEmail !== '' &&
                            <div className={styles.erreur}>{messageErreurEmail}</div>
                        } 
                        {messageErreurSubject !== '' &&
                            <div className={styles.erreur}>{messageErreurSubject}</div>
                        } 
                        {messageErreurDescription !== '' &&
                            <div className={styles.erreur}>{messageErreurDescription}</div>
                        } 
                        {messageEmailSent !== '' &&
                            <div className={styles.emailSent}>{messageEmailSent}</div>
                        }
                </form>
            </div>               
        </div>  
    </>
}
