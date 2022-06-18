// Source: https://www.emailjs.com/docs/examples/reactjs/
// Source: https://www.youtube.com/watch?v=jOviw8Ou_Yk&ab_channel=Zpunet
// Source: https://fr.reactjs.org/docs/forms.html

import styles from './contactMe.module.css';
import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactComponent(props) {

    // get the HTML element for the form
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const descriptionInput = useRef(null);

    // #1 verify name
    const [messageErreurName, setMessageErreurName] = useState('');

    const validateName = () => {

        // if the input is valid, return true
        if (nameInput.current.validity.valid) {

            setMessageErreurName(''); // no error message to send
            
            return true;
        }
        // if not valid, return error message
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

        // if the input is valid, return true
        if (emailInput.current.validity.valid) {

            setMessageErreurEmail(''); // no error message to send
          
            return true;
        }
        // if not valid, return error message
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

        // if the input is valid, return true
        if (subjectInput.current.validity.valid) {

            setMessageErreurSubject(''); // no error message to send
            // if valid, return true
            return true;
        }
        // if not valid, return error message
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

        // if the input is valid, return true
        if (descriptionInput.current.validity.valid) {

            setMessageErreurDescription('');
            // if valid, return true
            return true;
        }
        // if not valid, return error message
        else {
            if (descriptionInput.current.validity.valueMissing) {
                setMessageErreurDescription('The description is missing.');
            }
            else if (descriptionInput.current.validity.typeMismatch) {
                setMessageErreurDescription('Please enter a valid description.');
            }
        }
    }

    // reference to the form
    const form = useRef();

    // #5 submit form
    const [messageEmailSent, setMessageEmailSent] = useState('');

    const submitForm = (event) => {

        // to disable automatic refresh on page on submit event
        event.preventDefault(); 
       
        // if all form inputs are valid, send the email
        if(validateName() && validateEmail() && validateSubject() && validateDescription()){
            if (nameInput.current && emailInput.current && subjectInput.current && descriptionInput.current) {
 
            // function from EmailJs to send the email
            emailjs.sendForm('service_ncf2w2w', 'template_cdc9cfy', form.current, 'r42Y-azQa8YNJiP4T')
                .then((result) => {
                    //console.log(result.text);
                }, (error) => {
                    //console.log(error.text);
                });
            
            // print a confirmation message that the email was sent
            setMessageEmailSent('Your email was sent!');

            // makes the form inputs empty
            nameInput.current.value = '';
            emailInput.current.value = '';
            subjectInput.current.value = '';
            descriptionInput.current.value = '';
        }
    }   
}

    return (
        <div className={styles.ContactComp}>
            <p className={styles.contactparagraph}>Interested in hiring me for your project or just want to say hi?  <br /> 
                You can fill in the contact form below <br /> or send me an email to&nbsp;
                <a href="mailto:lamia.marigold@gmail.com">lamia.marigold@gmail.com</a>
            </p>    
            <div className={styles.contactcontainer}>  
                <form  ref={form} onSubmit={submitForm} className={styles.contactform} noValidate>
                        <div className={styles.contactformheader}>
                            <label>
                                <input type="text" className={styles.nom} required minLength="1" maxLength="30" placeholder="Name" ref={nameInput} onChange={validateName} onBlur={validateName} name="fullname" />
                            </label>
                            <label>
                                <input type="email" className={styles.courriel} required placeholder="Email" ref={emailInput} onChange={validateEmail} onBlur={validateEmail} name="email"/>
                            </label>
                        </div>
                        <label>
                            <input type="text" className={styles.sujet} required minLength="1" maxLength="30" placeholder="Subject" ref={subjectInput} onChange={validateSubject} onBlur={validateSubject} name="subject" />
                        </label>
                        <label>
                            <textarea className={styles.message} placeholder="Message" required minLength="1" maxLength="500" ref={descriptionInput} onChange={validateDescription} onBlur={validateDescription} name="message"></textarea>    
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
    );
}
