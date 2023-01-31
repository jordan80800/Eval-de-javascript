
var validation = document.getElementById("envoie");
// recuperation bouton nom dans le html//
var nom = document.getElementById("nom")
// recuperation bouton prenom dans le html//
var prenom = document.getElementById("prenom")
// recuperation bouton radio masculin dans le html//
var masculin = document.getElementById("masculin")
//// recuperation bouton select dans le html//
var select = document.getElementById("select");
var namem = document.getElementById("namem")
// recuperation bouton radio féminim dans le html//
var feminim = document.getElementById("feminim")
//recuperation du span qui permet d'afficher un message d'erreur dans nom//
var champ = document.getElementById("champ");
//recuperation du span qui permet d'afficher un message d'erreur dans prenom//
var prenomm = document.getElementById("prenomm");

// recuperation bouton date de naissance dans le html//
var date = document.getElementById("date ");
// recuperation bouton Code Postal dans le html//
var code = document.getElementById("code ");
// recuperation bouton Adresse dans le html//
var adresse = document.getElementById("adresse");
// recuperation bouton ville dans le html//
var ville = document.getElementById("ville");
// recuperation bouton email dans le html//
var email = document.getElementById("email");
// recuperation Textearea dans le html//
var texte = document.getElementById("texte");
//recuperation du span qui permet d'afficher un message d'erreur dans textearea//
var textem = document.getElementById("textem");
//Evenement qui valid au click//
validation.addEventListener('click', f_valide);
//Regex pour validité d'un prénom//
var w = /^[\d]+$/
//Regex pour code Postale doit comporter 5 caractéres numériques//
var regex2 = /^\d{5}$/;
//recuperation du span qui permet d'afficher un message d'erreur dans Sexe//
var sexem = document.getElementById("sexem");
//recuperation du span qui permet d'afficher un message d'erreur dans Code postale//
var num = document.getElementById("numm");
//recuperation du span qui permet d'afficher un message d'erreur dans Adresse//
var adm = document.getElementById("adm");
//regex pour adresse E-Mail valide//
var regex4 = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
// recuperation bouton check  dans le html//
const checkbox = document.getElementById("accepte");
//recuperation du span qui permet d'afficher un message d'erreur pour la checkbox//
var acceptem = document.getElementById("acceptem");
//Regex pour Date de Naissance valide//
var regex5 = /^\d{2}\/\d{2}\/\d{4}$/;
//recuperation du span qui permet d'afficher un message d'erreur dans Date de Naissance//
var datem = document.getElementById("datem");


// cela permet de recuperer la valeur dans le select et de le parcourir//
const selectElem = document.getElementById('select')

const pElem = document.getElementById('p')
selectElem.addEventListener('change', () => {
    let index = selectElem.selectedIndex;

    pElem.textContent = `selectedIndex: ${index}`;
})

console.log(selectElem.selectedIndex);


function f_valide(e) {



//validite nom//
    if (nom.value === "") {
        e.preventDefault();
        champ.innerHTML = 'le champ doit comporter au moins 1 caractére<br>';
        champ.style.color = 'red';

    }


    if (w.test(nom.value) == true) {
        e.preventDefault();
        champ.innerHTML = 'pas de chiffres <br>';
        champ.style.color = 'orange';

    }


//validité prenom//

    if (prenom.value === "") {
        e.preventDefault();
        prenomm.innerHTML = 'le champ doit comporter au moins 1 caractére<br>';
        prenomm.style.color = 'red';

    } 

    if (w.test(prenom.value) == true) {
        e.preventDefault();
        prenomm.innerHTML = 'pas de chiffres <br>';
        prenomm.style.color = 'orange';

    }



//validité code postale//

    if (regex2.test(code.value) == false) {
        e.preventDefault();
        numm.innerHTML = 'Le code postale doit comporter 5 chiffres <br>';
        numm.style.color = 'orange';


    }

    if (code.value === "") {
        e.preventDefault();
        numm.innerHTML = 'le champ doit comporter au moins 1 caractére<br>';
        numm.style.color = 'red';

    }


//validité email/

    if (regex4.test(email.value) == false) {

        mail.innerHTML = "Le format de l'email n'est pas valide <br>";
        mail.style.color = 'orange';
        e.preventDefault();
    }
    else {
        mail.style.display = "none"
    }
    if (email.value === "") {
        e.preventDefault();
        mail.innerHTML = 'le champ doit comporter au moins 1 caractére<br>';
        mail.style.color = 'red';

    }


//Textearea//

    if (texte.value === "") {
        e.preventDefault();
        textem.innerHTML = 'le champ doit comporter au moins 2 caractére<br>';
        textem.style.color = 'red';

    }
    else{
        textem.style.display="none";
    }//Regex date de Naissance valide //


// bouton acceptation traitement formulaire
    if (checkbox.checked) {
        console.log(checkbox)
        acceptem.style.display = "none";
    }

    else {

        e.preventDefault();
        acceptem.innerHTML = "Veuillez cocher cette casse "
        acceptem.style.color = 'red';

    }


//bouton radio sexe//
    if (masculin.checked || feminim.checked) {

        sexem.style.display = "none";
    }

    else {

        e.preventDefault();
        sexem.innerHTML = "Veuillez cocher une casse "
        sexem.style.color = 'red';

    }


//Date de naissance//
    if (regex5.test(date.value) == false) {
        e.preventDefault();
        datem.innerHTML = "Date de naissance non Valide <br>";
        datem.style.color = 'red';


    }
    else {
        datem.style.display = "none";
    }


// Bouton sujet//

    if (selectElem.selectedIndex === 0) {
        namem.innerHTML = "Selectionner un sujet";
        namem.style.color = 'red';
        e.preventDefault();
    } else{
        namem.style.display='none';
    }

}
f_valide(e);