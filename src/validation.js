const form = document.getElementById('contactForm');

// #1 valider le champ nom
const nom = document.getElementById('name');
const nomErreur = document.getElementById('nom-erreur');

const validerNom = () => {
    // objet validity, vérifie si l'input est valide
    // Enlève la classe active (style.css)
    if(nom.validity.valid){ 
        nomErreur.classList.remove('active'); 
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
// listener sur la soumission du formulaire (bouton soumettre)
form.addEventListener('button', validerNom);