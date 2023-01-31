 //Exercice 1 Eval//

// var jeune = 0;
// var moyen = 0;
// var vieux =0


// while(true){
// let age=parseInt(prompt('donnez votre ages'))
// if(age<20){

//     jeune++;

// }
// else if(age>40)
// {
// vieux++;
// }
// else if (age>=100)
// {

//         vieux++;
// }
// else if(age>=20&&age<=40){
//     moyen++                                                                              
// }
// if(age>=100)
// {break}

// }
// document.write("le nombre de personne qui ont moins de 20ans est de :" +jeune+ "<br>" );
// document.write("le nombre de personne entre 20et 40 ans est de : "+moyen + "<br>");
// document.write("le nombre de personne qui ont plus de 40ans est de :"+vieux+ "<br>");




// //Exercice 2 Eval//
// var multiplication=parseInt(window.prompt("entrez la table de multiplication que vous souhaitez" ));


// function multiple(){
// for(i=1 ; i<=10; i++){

// var resultat= multiplication * i ;
// document.write(multiplication+"*"+i+"="+resultat+"<br>");

// }
// }

// multiple();



// // Exercice 3 Eval//
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// var name = prompt("Entre un prenom:");
// var found = false;

// for (var i = 0; i < tab.length; i++) {
//     if (tab[i] === name) {
//         found = true;
//         for (var j = i; j < tab.length - 1; j++) {
//             tab[j] = tab[j + 1];
//         }
//         tab[tab.length - 1] = "";
//         break;
//     }
// }

// if (found) {
//     console.log(name + " Enlevez du tableau.");
//     document.write(tab);
// } else {
//    alert("Non trouvé.");
// }



// //Exercice 4 Eval//
// let pu = parseFloat(prompt("Entrez le prix unitaire :"));
// let qtecom = parseFloat(prompt("Entrez la quantité commandée :"));
// let tot = pu * qtecom;
// let rem = 0;
// let prixf=0


// if (tot >= 100 && tot <= 200) {
//     rem = tot * 0.05;

// } else if (tot > 200) {
//     rem = tot * 0.1;
// }


// let pap = tot - rem;


// let port = 0;

// if (pap > 500) {
//     port= 0;

// } else {
//     port = pap * 0.02;
//     if (port < 6) {
//         port = 6;
//     }
// }
// prixf=tot-rem + port;

// alert("Prix à payer:" + pap + " €");
// alert("Remise :" + rem + " €");
// alert(Math.ceil(+ port));
// alert(Math.floor(prixf*100)/100) ;






