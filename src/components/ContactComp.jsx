import styles from './ContactComp.module.css';

export default function ContactComp() {

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
                                <input type="text" id="name" className={styles.nom} required minLength="1" maxLength="30" placeholder="Name"/>
                            </label>
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
                        <input onClick={printForm} className={styles.contactsubmit} type="button" value="Send now"></input>
                    
                </form>    
            </div>               
        </div>  

    </>
}
