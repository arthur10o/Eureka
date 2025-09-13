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
    display.style.background = couleur_fonce;                                                               // Change la couleur de la barre d'affichage du calcul
    display.style.color = couleur_claire;                                                                   // Change la couleur d'affichage du calcul
    arriere_plan_calculatrice.style.background = couleur_claire;                                            // Change le background de l'arrière plan de la calculatrice
    zone_historique_calcul.style.color = couleur_fonce;                                                     // Change la couleur du texte de l'historique de calculs
    zone_historique_calcul.style.background = couleur_claire;                                               // Change la couleur de la zone de l'historique des calculs

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les élements de la class = "a"
        a[i].style.color = couleur_fonce;                                                                   // Change la couleur des éléments de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les élements de la class = "icon"
        icon[i].style.color = couleur_fonce;                                                                // Change la couleur des éléments de la class = "icon" un par un
    }
    for (let i = 0; i < boxShadow.length; i++){                                                             // Boucle pour parcourir tous les élements de la class = "boxshadow"
        boxShadow[i].style.boxShadow = "0 2px 10px #7BA5D9";                                              // Change les ombres des éléments de la class = "boxshadow" un par un
    }
    for (let i = 0; i < bouttons_calculatrice.length; i++){                                                 // Boucle pour parcourir tous les élements de la class = "boutton_calculatrice"
        bouttons_calculatrice[i].style.color = couleur_claire;                                              // Change la couleur des éléments de la class = "boutton_calculatrice"
        bouttons_calculatrice[i].style.backgroundColor = couleur_fonce;                                     // Change le background des éléments de la class = "boutton_calculatrice"
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
    display.style.background = couleur_claire;                                                              // Change la couleur de la barre d'affichage du calcul
    display.style.color = couleur_fonce;                                                                    // Change la couleur d'affichage du calcul
    arriere_plan_calculatrice.style.background = couleur_fonce;                                             // Change le background de l'arrière plan de la calculatrice
    zone_historique_calcul.style.color = couleur_claire;                                                    // Change la couleur du texte de l'historique de calculs
    zone_historique_calcul.style.background = couleur_fonce;                                                // Change la couleur de la zone de l'historique des calculs


    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les éléments de la class = "a"
        a[i].style.color = couleur_claire;                                                                  // Change les élements de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les éléments de la class = "icon"
        icon[i].style.color = couleur_claire;                                                               // Change les élements de la class = "icon" un par un
    }
    for (let i = 0; i < boxShadow.length; i++){                                                             // Boucle pour parcourir tous les élements de la class = "boxshadow"
        boxShadow[i].style.boxShadow = "0 2px 10px #003366";                                              // Change les ombres des éléments de la class = "boxshadow" un par un
    }
    for (let i = 0; i < bouttons_calculatrice.length; i++){                                                 // Boucle pour parcourir tous les élements de la class = "boutton_calculatrice"
        bouttons_calculatrice[i].style.color = couleur_fonce;                                               // Change la couleur des éléments de la class = "boutton_calculatrice"
        bouttons_calculatrice[i].style.backgroundColor = couleur_claire;                                    // Change le background des éléments de la class = "boutton_calculatrice"
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

function handleInput(action) {
    /* Fonction pour effectuer le calcul */
    if (action === "clear") {                                                                               // Si on appuie sur C alors :
        display.value = "";                                                                                 // Réinitialise l'affichage
        return;                                                                                             // Return pour mettre fin à la fonction
    } else if (action === "delete") {                                                                       // Si on appuie sur DEL :
        display.value = display.value.slice(0, -1);                                                         // Supprime le dernier caractère
        return;                                                                                             // Return pour mettre fin à la fonction
    } else if (action === "calculate") {                                                                    // Si on appuie sur = :
        try {                                                                                               // Code exécuter si aucune erreur ne se produit
            if(/\/\s*0/.test(display.value)){                                                               // Si il y a une division par 0 :
                display.value = "Erreur : Div. par 0"                                                       // Afficher dans la barre du calcul : "Erreur : Div. par 0"
            }
            else{                                                                                           // Sinon : 
                let calcul = display.value;                                                                 // Associe à la variable calcul le calcul que l'utilisateur à fait                                                      
                display.value = eval(display.value);                                                        // Essayer d'effetue le calcul
                let etat_connexion = localStorage.getItem("etat_connexion");                                // Récupére l'état de connexion dans le local storage
                if(etat_connexion == "true"){                                                               // Si l'utilisateur est connecté alors sauvegarder le calcul dans le local storage
                    let utilisateur_connecte = localStorage.getItem("nom_utilisateur");                     // Récupéré le nom de l'utilisateur connecté
                    let info_joueur = JSON.parse(localStorage.getItem("utilisateurs"));                     // Récupéré les informations des utilisateurs
                    let chercher_utilisateur = info_joueur.find(utilisateurs => utilisateurs.username === utilisateur_connecte);// Recherché parmis tout les utilisateurs celui qui est connecté

                    if(chercher_utilisateur){                                                               // Si l'utilisateur connecté est trouvé :
                        chercher_utilisateur.historique_calcul_tout.push({                                  // Ajouté à son historique de calcul :
                            "calcul" : calcul + "=" + display.value,                                        // Le calcul avec résultat
                        });
                    }

                    localStorage.setItem("utilisateurs", JSON.stringify(info_joueur));                      // Enregistre les infos du joueur mis à jour
                    maj_historique_calcul_visuelle();
                }
            }
        }catch{
            alert("Une erreur est survenu lors du calcul");                                                 // Message d'erreur si il y a une erreur qui survient
        }
    } else {                                                                                                // Sinon :
        if ((display.value === "Erreur") || (display.value === "Erreur : Div. par 0")) {                    // Si dans la barre de calcul il y a ecrit : "Erreur" ou il y a écrit : "Erreur : Div. par 0":    
            display.value = "";                                                                             // Efface le message avant d'écrire un nouveau calcul
        }
        display.value += action;                                                                            // Ajoute le chiffre ou l'opérateur dans la barre du calcul pour le mettre à jour
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
        a.href = "../profil/profil.html";                                                                   // Créé un hyper lien à la balise <a> pour redirigé vers la page profil

           
        lien_login.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>Se Déconnecté';                  // Changer l'icon et le text pour passer de Se Connecter à Se Déconnecté
        lien_login.href = "#";                                                                              // Supprimer l'hyperlien du login
    }
    else {
        lien_login.innerHTML = '<ion-icon name="person-outline" class="icon hover"></ion-icon>Se Connecter';// Changer l'icon et le text pour passer de Se Déconnecté à Se Connecter
        lien_login.href = "../login/login.html";                                                            // Ajoute l'hyperlien pour accèder au login
    }
}

async function maj_historique_calcul_visuelle() {
    let etat_connexion = localStorage.getItem("etat_connexion");                                            // Récupére l'état de connexion dans le local storage

    if(etat_connexion === "true"){                                                                          // Si utilisateur connecter
        let info_utilisateur = JSON.parse(localStorage.getItem("utilisateurs"));                            // Récupéré ses infos dans le local storage en transformant l'objet en objet JS
        let user_connect = localStorage.getItem("nom_utilisateur");                                         // Récupére dans le local storage le nom de l'utilisateur connecté
        chercher_utilisateur = info_utilisateur.find(utilisateurs => utilisateurs.username === user_connect);// Recherche l'utilisateur connecté

        if(chercher_utilisateur){
            if(info_utilisateur && Array.isArray(chercher_utilisateur.historique_calcul_tout)){             // Vérifie si l'historique de calcul est un tableau
                let dix_derniers_calcul = chercher_utilisateur.historique_calcul_tout.slice(-10);           // Récupère les 10 derniers calculs

                dix_derniers_calcul.reverse();                                                              // Invers l'ordre des 10 derniers calcul
                let texteHistorique = dix_derniers_calcul.map((element) => element.calcul).join('\n');      // Créé un tableau qui contient les valeurs de calcul dans le local storage

                document.getElementById("liste_calcul").innerText = texteHistorique;                        // Affiche les 10 derniers calcul
            }
            else{
                console.log("Aucun historique disponible");
            }
        }
        else{
            console.log("erreur");
        }
    }
    else{                                                                                                   // Si utilisateur est pas connecté
        document.getElementById("liste_calcul").innerText = "Veuillez vous connecter afin d'avoir votre historique de calcul";// Afficher message pour le prévenir
    }
}



//-------------------------------------------------Variable-------------------------------------------------//
let etat_mode_claire_sombre = 0;                                                                            // claire = 0 | sombre = 1
let couleur_claire = "#7BA5D9";                                                                             // Definie la couleur claire pour le mode jour
let couleur_fonce = "#003366";                                                                              // Definie la couleur foncé pour le mode nuit
let button_mode_clair_sombre = document.getElementsByClassName("modeClairSombre");                          // Sélectionne tous les éléments avec la class = "modeClairSombre"
let button_click = document.getElementById("bouttonClaireSombre");                                          // Sélectionne le boutton pour changer son apparence
let navbar = document.getElementById("list");                                                               // Sélectionne l'éléments avec l'id "list"
let a = document.getElementsByClassName("a");                                                               // Sélectionne les élements avec la class = "a"
let icon = document.getElementsByClassName("icon");                                                         // Sélectionne les élements avec la class = "icon"
let zone_hover = document.getElementsByClassName("hover");                                                  // Sélectionne les élements avec la class = "hover"
let boxShadow = document.getElementsByClassName("boxshadow");                                               // Sélectionne les élements avec la class = "boxshadow"
let footer = document.getElementById("footer");                                                             // Sélectionne l'élements avec l'id = "footer"
let bouttons_calculatrice = document.getElementsByClassName("boutton_calculatrice");                        // Sélectionne les éléments avec la class = "boutton_calculatrice"
let display = document.getElementById("display");                                                           // Sélectionne l'élément avec l'id = "display"
let arriere_plan_calculatrice = document.getElementById("calculator");                                      // Sélectionne l'élément avec l'id = "calculator"
let zone_historique_calcul = document.getElementById("historique");


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
    maj_historique_calcul_visuelle();
    maj_etat_connexion_visuel();                                                                            // Appelle la fonction maj_etat_connexion_visuel()
    changer_etat_bouton_claire_sombre();                                                                    // Mettre à jour l'état jour / nuit
});