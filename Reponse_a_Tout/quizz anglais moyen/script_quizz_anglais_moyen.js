//-------------------------------------------------Fonction-------------------------------------------------//
function activer_mode_sombre() {
    /* Fonction pour activer le mode sombre si appuyé sur le bouton */
    button_mode_clair_sombre[0].style.color = couleur_claire;                                               // Change la couleur du texte
    button_mode_clair_sombre[0].style.backgroundColor = couleur_fonce;                                      // Change la couleur du background
    document.body.style.color = couleur_claire;                                                             // Change la couleur du texte dans le body
    document.body.style.backgroundColor = couleur_fonce;                                                    // Change la couleur d'arrière-plan dans le body
    button_click.style.color = couleur_fonce;                                                               // Change la couleur du texte dans le boutton pour contraster avec le reste
    button_click.innerHTML = '<ion-icon name="sunny" class="soleil hover"></ion-icon>Mode Clair';           // Change l'icon et le texte du boutton
    navbar.style.backgroundColor = couleur_claire;                                                          // Change la couleur de la navbar
    footer.style.backgroundColor = couleur_claire;                                                          // Change le background du footer
    footer.style.color = couleur_fonce;                                                                     // Change la couleur du texte du footer

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les élements de la class = "a"
        a[i].style.color = couleur_fonce;                                                                   // Change la couleur des éléments de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les élements de la class = "icon"
        icon[i].style.color = couleur_fonce;                                                                // Change la couleur des éléments de la class = "icon" un par un
    }
    for (let i = 0; i < zone_niv.length; i++){                                                              // Boucle pour parcourir tous les élements de la class = "liste_jeux"
        zone_niv[i].style.color = couleur_fonce;                                                            // Change la couleur des éléments de la class = "liste_jeux" un par un
        zone_niv[i].style.backgroundColor = couleur_claire;                                                 // Change le background des éléments de la class = "liste_jeux" un par un
    }
    for (let i = 0; i < boxShadow.length; i++){                                                             // Boucle pour parcourir tous les élements de la class = "boxshadow"
        boxShadow[i].style.boxShadow = "0 2px 10px #7BA5D9";                                              // Change les ombres des éléments de la class = "boxshadow" un par un
    }
}

function activer_mode_clair() {
    /* Fonction pour activer le mode clair si appuyé sur le bouton */
    button_mode_clair_sombre[0].style.color = couleur_fonce;                                                // Change la couleur du texte
    button_mode_clair_sombre[0].style.backgroundColor = couleur_claire;                                     // Change la couleur du background
    document.body.style.color = couleur_fonce;                                                              // Change la couleur du texte dans le body
    document.body.style.backgroundColor = couleur_claire;                                                   // Change la couleur d'arrière-plan dans le body
    button_click.style.color = couleur_claire;                                                              // Change la couleur du texte dans le boutton pour contraster avec les reste
    button_click.innerHTML = '<ion-icon name="moon-outline" class="lune hover"></ion-icon>Mode Sombre';     // Change l'icon et le texte du boutton
    navbar.style.backgroundColor = couleur_fonce;                                                           // Change la couleur de la navbar
    footer.style.backgroundColor = couleur_fonce;                                                           // Change le background du footer
    footer.style.color = couleur_claire;                                                                    // Change la couleur du texte du footer

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les éléments de la class = "a"
        a[i].style.color = couleur_claire;                                                                  // Change les élements de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les éléments de la class = "icon"
        icon[i].style.color = couleur_claire;                                                               // Change les élements de la class = "icon" un par un
    }
    for (let i = 0; i < zone_niv.length; i++){                                                              // Boucle pour parcourir tous les élements de la class = "icon"
        zone_niv[i].style.color = couleur_claire;                                                           // Change la couleur des éléments de la class = "liste_jeux" un par un
        zone_niv[i].style.backgroundColor = couleur_fonce;                                                  // Change le background des éléments de la class = "liste_jeux" un par un
    }
    for (let i = 0; i < boxShadow.length; i++){                                                             // Boucle pour parcourir tous les élements de la class = "boxshadow"
        boxShadow[i].style.boxShadow = "0 2px 10px #003366";                                              // Change les ombres des éléments de la class = "boxshadow" un par un
    }
}

function changer_etat_bouton_claire_sombre() {
    /* Fonction pour définir si on doit exécuter la fonction mode claire ou mode sombre */
    if (etat_mode_claire_sombre == 0) {                                                                     // Condition pour définir si on active le mode sombre ou non
        etat_mode_claire_sombre = 1;                                                                        // Passe la variable "etat_mode_claire_sombre" à 1 pour définir le prochain changement de couleur
        activer_mode_sombre();                                                                              // Execute la fonction activer_mode_sombre()
    }
    else if (etat_mode_claire_sombre == 1) {                                                                // Condition pour définir si on active le mode clair ou non
        etat_mode_claire_sombre = 0;                                                                        // Passe la variable "etat_mode_claire_sombre" à 0 pour définir le prochain changement de couleur
        activer_mode_clair();                                                                               // Execute la fonction activer_mode_clair()
    }

    localStorage.setItem("saveModeJourNuit", etat_mode_claire_sombre);                                      // Enregistre le dernier état du mode jour / nuit dans le localStorage
}

async function verifier_reponse(réponse_selec) {
    /* Vérifie si la réponse séléctionner est correcte */
    let elem_select = document.getElementById(réponse_selec);                                               // Définit l'éléments séléctionner
    elem_select.style.pointerEvents = "none";                                                               // Désactive la possiblité de click sur une reponse si on vient de click
    if (réponse_selec == rep_corect){                                                                       // Vérifie si la réponse séléctionner est correct
        score++;
        elem_select.insertAdjacentHTML('afterbegin', '<ion-icon name="checkmark-outline"></ion-icon>');     // Ajoute une icon de validation devant la réponse
        if(etat_mode_claire_sombre == 0){                                                                   // Vérifie si le mode est sombre
            elem_select.style.color = vert_claire;                                                          // Change la couleur de la bonne réponse en vert
            await pause(1000);                                                                              // Attend 2 secondes
            question.style.color = "inherit";                                                               // Remet la couleur de la question 
            rep1.style.color = "inherit";                                                                   // Remet la couleur de la réponse1 
            rep2.style.color = "inherit";                                                                   // Remet la couleur de la réponse 2
            rep3.style.color = "inherit";                                                                   // Remet la couleur de la réponse 3
            rep4.style.color = "inherit";                                                                   // Remet la couleur de la réponse 4
        }
        else if(etat_mode_claire_sombre == 1){                                                              // Vérifie si le mode est clair
            elem_select.style.color = vert_fonce;                                                           // Change la couleur de la bonne réponse en vert
            await pause(1000);                                                                              // Attend 1 secondes
            question.style.color = "inherit";                                                               // Remet la couleur de la question 
            rep1.style.color = "inherit";                                                                   // Remet la couleur de la réponse1 
            rep2.style.color = "inherit";                                                                   // Remet la couleur de la réponse 2
            rep3.style.color = "inherit";                                                                   // Remet la couleur de la réponse 3
            rep4.style.color = "inherit";                                                                   // Remet la couleur de la réponse 4
        }

        if(num_question == 1){                                                                              // Si c'est la 1er question
            question.innerText = '2. Which sentence is correct?';                                           // Met la question de la 2
            rep1.innerHTML = "- She is more taller than him.";                                              // Change la reponse 1
            rep2.innerHTML = "- She is the tallest than him.";                                              // Change la reponse 2
            rep3.innerHTML = "- She is taller than him.";                                                   // Change la reponse 3
            rep4.innerHTML = "- She is more tall than him.";                                                // Change la reponse 4
            rep_corect = "rep3";                                                                            // Change la reponse valide
            num_question = 2;                                                                               // Met à jour le numéro de la question
        }
        else  if(num_question == 2){                                                                        // Si c'est la 2eme question
            question.innerText = '3. Choose the correct form of the verb in the sentence: "They ______ to the park every day."';// Met la question de la 3
            rep1.innerHTML = "- goes";                                                                       // Change la reponse 1
            rep2.innerHTML = "- going";                                                                       // Change la reponse 2
            rep3.innerHTML = "- go";                                                                       // Change la reponse 3
            rep4.innerHTML = "- gone";                                                                       // Change la reponse 4
            rep_corect = "rep3";                                                                            // Change la reponse valide
            num_question = 0;                                                                               // Met à jour le numéro de la question par un 0 pour dire que c'est fini
        }

        else if(num_question == 0){                                                                         // Si les toutes les questions sont réussit
            let etat_connexion = localStorage.getItem("etat_connexion");                                    // Récupére l'état de connexion dans le local storage
            if(etat_connexion == "true"){                                                                   // Si l'utilisateur est connecté alors sauvegarder le calcul dans le local storage
                let utilisateur_connecte = localStorage.getItem("nom_utilisateur");                         // Récupéré le nom de l'utilisateur connecté
                let info_joueur = JSON.parse(localStorage.getItem("utilisateurs"));                         // Récupéré les informations des utilisateurs
                let chercher_utilisateur = info_joueur.find(utilisateurs => utilisateurs.username === utilisateur_connecte);// Recherché parmis tout les utilisateurs celui qui est connecté

                if(chercher_utilisateur){                                                                   // Si l'utilisateur connecté est trouvé :
                    let meilleur_score = chercher_utilisateur.stat_meilleur_score.quizz.Anglais[1][1];// Récupére l'ancien meilleur score                        
                    if(meilleur_score < score){                                                             // Si l'ancien meilleur score est inférieur au score que l'utilisateur vient de faire
                        chercher_utilisateur.stat_meilleur_score.quizz.Anglais[1][1]= score;                // Alors mettre a jour le meilleur score
                        localStorage.setItem("utilisateurs", JSON.stringify(info_joueur));                  // Enregistre les infos du joueur mis à jour
                    }                                                             
                }
            }
            alert("Félicitations ! Vous avez fini le niveau moyen du test d'anglais !");                     // Afficher message pour félicité
            window.location.href = "../choix_niv_question/quizz_choix_niv_question.html";                   // Retourner au choix des quizz
        }
        for (let i = 0; i < réponse.length; i++){
            réponse[i].style.pointerEvents = "auto";                                                        // Réactive le click sur les questions déjas séléctionné
        }
    }
    else {                                                                                                  // Si la réponse est fausse
        if(etat_mode_claire_sombre == 0){                                                                   // Vérifie si le mode est sombre
            question.style.color = rouge_clair;                                                             // Change la couleur de la question en rouge
            elem_select.style.color = rouge_clair;                                                          // Change la couleur de la réponse fausse et rouge
        }
        else if(etat_mode_claire_sombre == 1){                                                              // Vérifie si le mode est clair
            question.style.color = rouge_fonce;                                                             // Change la couleur de la question en rouge
            elem_select.style.color = rouge_fonce;                                                          // Change la couleur de la réponse fausse et rouge
        }
        elem_select.insertAdjacentHTML('afterbegin', '<ion-icon name="close-outline"></ion-icon>');         // Ajoute une icon d'invalidation devant la réponse
    }
}

function pause(ms) {
    /* Effectuer une pause dans le programme */
    return new Promise(resolve => setTimeout(resolve, ms));
}

function maj_etat_connexion_visuel(){
    /* Fonction pour effectuer les modifications visuels lors de la connexion et de la déconnexion */
    let etat_connexion = localStorage.getItem("etat_connexion");                                            // Récupére l'état de connexion dans le local storage
    let lien_login = document.getElementById("lien_login");                                                 // Sélectionne l'endroit avec l'hypertexte pour se connecter

    if(etat_connexion === "true"){                                                                          // Si l'utilisateur est connecté
        let a = document.createElement("a");                                                                // Créé une balise <a></a>
        let icon = document.createElement("ion-icon");                                                      // Créé une balise <ion-icon></ion-icon>
        icon.setAttribute("name", "accessibility-outline");                                                 // Mettre les attribut name et accessibility-outline à la balise <ion-icon></ion-icon>
        let text = document.createTextNode("Profil");                                                       // Créé un champs text
        let profil_element = document.getElementById("profil");                                             // Séléctionner l'endroit avec l'id = profil

        a.classList.add("a", "hover");                                                                      // Ajouter les class a et hover a l'élément a créé juste avant
        a.appendChild(icon);                                                                                // Mettre la balise <ion-icon> enfant de la balise <a>
        a.appendChild(text);                                                                                // Mettre l'élément text enfant à la balise <a>
        profil_element.appendChild(a);                                                                      // Mettre la balise <a> enfant de l'élément avec l'id = profil
        a.href = "../../profil/profil.html";                                                                   // Créé un hyper lien à la balise <a> pour redirigé vers la page profil

           
        lien_login.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>Se Déconnecté';                  // Changer l'icon et le text pour passer de Se Connecter à Se Déconnecté
        lien_login.href = "#";                                                                              // Supprimer l'hyperlien du login
    }
    else {
        lien_login.innerHTML = '<ion-icon name="person-outline" class="icon hover"></ion-icon>Se Connecter';// Changer l'icon et le text pour passer de Se Déconnecté à Se Connecter
        lien_login.href = "../../login/login.html";                                                         // Ajoute l'hyperlien pour accèder au login
    }
}

function login_logout(){
    /* Fonction pour changer l'état connexion */
    let etat_connexion = localStorage.getItem("etat_connexion");                                            // Récupére l'état de connexion dans le local storage

    if(etat_connexion === "true"){                                                                          // Si l'utilisateur est connecté
        localStorage.setItem('etat_connexion', !etat_connexion);                                            // Mettre à jour l'état en false
        location.reload();                                                                                  // Recharger la page
    }   
    else{                                                                                                   // Si l'utilisateur est déconnecté
        localStorage.setItem('etat_connexion', !etat_connexion);                                            // Mettre à jour l'état en true
        location.reload();                                                                                  // Recharger la page
    }
}

//-------------------------------------------------Variable-------------------------------------------------//
let etat_mode_claire_sombre = 0;                                                                            // claire = 0 | sombre = 1
let num_question = 1;                                                                                       // Numéro de la question
let couleur_claire = "#7BA5D9";                                                                             // Definie la couleur claire pour le mode jour
let couleur_fonce = "#003366";                                                                              // Definie la couleur foncé pour le mode nuit
let vert_claire = "#4C9A2A";                                                                                // Definie le vert clair pour la réponse correcte en mode foncé
let vert_fonce = "#006633";                                                                                 // Definie le vert foncé pour la réponse correcte en mode claire
let rouge_clair = "#F1A7A0";                                                                                // Definie le rouge clair pour les réponse incorecte
let rouge_fonce = "#D15C5C";                                                                                // Definie le rouge fonce pour les réponse incorecte
let button_mode_clair_sombre = document.getElementsByClassName("modeClairSombre");                          // Sélectionne tous les éléments avec la class = "modeClairSombre"
let button_click = document.getElementById("bouttonClaireSombre");                                          // Sélectionne le boutton pour changer son apparence
let navbar = document.getElementById("list");                                                               // Sélectionne l'éléments avec l'id "list"
let a = document.getElementsByClassName("a");                                                               // Sélectionne les élements avec la class = "a"
let icon = document.getElementsByClassName("icon");                                                         // Sélectionne les élements avec la class = "icon"
let zone_hover = document.getElementsByClassName("hover");                                                  // Sélectionne les élements avec la class = "hover"
let zone_niv = document.getElementsByClassName("container");                                                // Sélectionne les élements avec la class = "liste_jeux"
let boxShadow = document.getElementsByClassName("boxshadow");                                               // Sélectionne les élements avec la class = "boxshadow"
let footer = document.getElementById("footer");                                                             // Sélectionne l'élements avec l'id = "footer"
let rep1 = document.getElementById("rep1");                                                                 // Récupére l'id de la réponse 1
let rep2 = document.getElementById("rep2");                                                                 // Récupére l'id de la réponse 2
let rep3 = document.getElementById("rep3");                                                                 // Récupére l'id de la réponse 3
let rep4 = document.getElementById("rep4");                                                                 // Récupére l'id de la réponse 4
let rep_corect = "rep1";                                                                                    // Définit la bonne réponse
let question = document.getElementById("question");                                                         // Définit l'élément de la question
let réponse = document.querySelectorAll(".reponse");                                                        // Definit tout les éléments avec la class = ".reponse"
let score = 0;                                                                                              // Met le score à 0


//---------------------------------------------------Programme--------------------------------------------//
if (button_click) {                                                                                         // vérifie si le boutton est cliqué
    button_click.addEventListener("click", changer_etat_bouton_claire_sombre);                              // Gestion du mode clair / sombre
}

for (let i = 0; i < zone_hover.length; i++ ){                                                               // Parcours tous le éléments ayant la class = "hover"
    zone_hover[i].addEventListener("mouseover", function(){                                                 // Détécte si la souris passe sur un élement avec la class = "hover"
        zone_hover[i].style.color = "#FEF9E6";                                                              // Change la couleur de l'élément ou la souris la survole
    });

    zone_hover[i].addEventListener("mouseout", function(){                                                  // Détécte si la souris quitte l'élément
        if (etat_mode_claire_sombre == 1){                                                                  // Verifie si etat_mode_claire_sombre = 1
            activer_mode_sombre();                                                                          // Active le mode sombre
        }
        else if (etat_mode_claire_sombre == 0){                                                             // verifie si etat_mode_claire_sombre = 0
            activer_mode_clair();                                                                           // Active le mode claire
        }
    });
}

window.addEventListener("load", function(){                                                                 // Fonction qui s'éxécute lorsque la page est totalement chargé
    etat_mode_claire_sombre = localStorage.getItem("saveModeJourNuit");                                     // Récupére le dernier état du mode jour / nuit dans le localStorage
    if (etat_mode_claire_sombre === null){                                                                  // Si l'état jour / nuit est null :
        etat_mode_claire_sombre = 0;                                                                        // Mettre l'etat jour / nuit à 0
    }
    else if (etat_mode_claire_sombre == 0){                                                                 // Si l'état est égale à 0 :
        etat_mode_claire_sombre = 1;                                                                        // Mettre l'état jour / nuit à 1
    }
    else if (etat_mode_claire_sombre == 1 ){                                                                // Si l'état jour / nuit est égale à 1 :
        etat_mode_claire_sombre = 0;                                                                        // Mettre l'état jour / nuit à 0
    }

    maj_etat_connexion_visuel();                                                                            // Appelle la fonction maj_etat_connexion_visuel()
    changer_etat_bouton_claire_sombre();                                                                    // Mettre à jour l'état jour / nuit
});

réponse.forEach(function(reponse){                                                                          // Balaye tout les éléments avec la class = "reponse"
    reponse.addEventListener("click", function(){                                                           // vérifie si on clique sur un des éléments
        verifier_reponse(reponse.id);                                                                       // Exécute la fonction pour vérifier si la réponse cliqué est la bonne
    });
});