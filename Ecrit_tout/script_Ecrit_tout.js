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

function afficher_nouveau_mot(){
    /*Affiche le nouveau mot*/
    const elem_du_mot = document.getElementById("mot");                                                     // Récupére l'endroit ou on doit afficher le mot
    elem_du_mot.textContent = list_mots[indice_mot_courant];                                                // Met a jour le mot
}

function verifier_mot(){
    const entre_utilisateur = document.getElementById("entre_user").value.trim().toLowerCase();             // Récupére l'id ou l'utilisateur rentre son mot puis enléve les espaces au debut & a la fin ; et met tout en minuscule
    const mot_correct = list_mots[indice_mot_courant];                                                      // Définit le mot correct
    const elem_resultat = document.getElementById("resultat");                                              // Récupére l'endroit ou le résultat va s'afficher
    const elem_score = document.getElementById("score");                                                    // Récupére l'endroit ou le score s'affiche

    document.getElementById("button_verifier_mot").disabled = true;                                         // Déscative le boutton pour valider la réponse

    if (entre_utilisateur == mot_correct){                                                                  // Si l'utilisateur à entré le bon mot sans faute :
        elem_resultat.textContent = "Correct !";                                                            // Afficher un message : "Correct !"
        elem_resultat.style.color = "green";                                                                // Mettre le message en vert
        elem_score.style.color = "green";                                                                   // Mettre le score en vert
        score++                                                                                             // Ajouté 1 au score
    }
    else {                                                                                                  // Sinon :
        if(list_mots[indice_mot_courant] == "théière"){                                                     // Si le mot que doit saisire l'utilisateur est égale à théière
            if((entre_utilisateur == "cafetière") || (entre_utilisateur == "cafetiere")){                   // Si l'utilisateur entre cafetière
                const img_error_418 = document.createElement("img");                                        // Créé un nouvelle élément HTML (img) pour l'image error 418
                if (etat_mode_claire_sombre == 1){                                                          // Si l'état mode jour/nuit est égale au mode sombre :
                    img_error_418.src = "images/error_418_sombre.png";                                      // Mettre l'image error 418 pour le mode nuit
                }
                else if (etat_mode_claire_sombre == 0){                                                     // Si l'état mode jour/nuit est égale au mode claire :
                    img_error_418.src = "images/error_418_claire.png";                                      // Mettre l'image error 418 en mode claire
                }
                img_error_418.style.position = "absolute";                                                  // Met la position de l'image en absolute
                img_error_418.style.top = "50%";                                                            // Placer l'image à 50% du haut
                img_error_418.style.left = "50%";                                                           // Placer l'image à 50% de la largeur
                img_error_418.style.transform = "translate(-50%, -50%)";                                    // Ajuster l'image pour qu'elle soit centrée parfaitement
                img_error_418.style.width = "auto";                                                         // Laisser la largeur automatique
                img_error_418.style.height = "100%";                                                        // Utiliser 100% de la hauteur de la fenêtre

                document.body.style.overflow = "hidden";                                                    // Empêcher le défilement de la page
                document.body.style.margin = "0";                                                           // Retirer les marges du body

                const tout_elem = document.body.children;                                                   // Récupére tout les éléments enfant du body
                for (let i = 0; i < tout_elem.length; i++) {
                    tout_elem[i].style.display = "none";                                                    // Cacher chaque élément de la page
                }

                document.body.appendChild(img_error_418);                                                   // Affiche l'image de l'error 418 comme seul élément enfant du body de la page
            }
        }                                                                                                   // Si l'utilisateur n'a pas entré le bon mot ou a fait une faute :
        elem_resultat.textContent = 'Incorrect ! Le mot était "' + mot_correct + '"';                       // Mettre message pour prévenir plus rappeller le mot
        elem_resultat.style.color = "red";                                                                  // Mettre le message en rouge
    }
    elem_score.textContent = score;                                                                         // Met a jour l'affichage du score

    setTimeout(()=>{                                                                                        // Exécute une action après un délai (1 seconde dans notre cas. Cf: ligne 101)
        indice_mot_courant++                                                                                // Augmente de 1 l'indice du mot courant pour passé au mot suivant
        if (indice_mot_courant >= list_mots.length){                                                        // Vérifi si l'indice du mot courant est supérieur ou égale à la longueur de la liste des mots
            document.getElementById("button_verifier_mot").disabled = true;
            clearInterval(intervalId);
            let etat_connexion = localStorage.getItem("etat_connexion");                                    // Récupére l'état de connexion dans le local storage
            if(etat_connexion == "true"){                                                                   // Si l'utilisateur est connecté alors sauvegarder le calcul dans le local storage
                let utilisateur_connecte = localStorage.getItem("nom_utilisateur");                         // Récupéré le nom de l'utilisateur connecté
                let info_joueur = JSON.parse(localStorage.getItem("utilisateurs"));                         // Récupéré les informations des utilisateurs
                let chercher_utilisateur = info_joueur.find(utilisateurs => utilisateurs.username === utilisateur_connecte);// Recherché parmis tout les utilisateurs celui qui est connecté

                if(chercher_utilisateur){                                                                   // Si l'utilisateur connecté est trouvé :
                    let meilleur_score = chercher_utilisateur.stat_meilleur_score.ecrit_tout;               // Récupére l'ancien meilleur score                        
                    if(meilleur_score < score){                                                             // Si l'ancien meilleur score est inférieur au score que l'utilisateur vient de faire
                        chercher_utilisateur.stat_meilleur_score.ecrit_tout = score;                        // Alors mettre a jour le meilleur score
                        localStorage.setItem("utilisateurs", JSON.stringify(info_joueur));                  // Enregistre les infos du joueur mis à jour
                    }                                                             
                }
            }
            window.location.href = "../index/index.html";                                                   // Redirige vers l'index
        }
        afficher_nouveau_mot();                                                                             // Appelle la fonction afficher_nouveau_mot pour afficher le mot suivant
        document.getElementById("entre_user").value = '';                                                   // Remet le champs ou l'utilisateur écrit à 0 (le réinisialise)
        document.getElementById("entre_user").focus();                                                      // Remet le focus sur le champs ou l'utilisateur écrit
        document.getElementById("button_verifier_mot").disabled = false;                                    // Réscative le boutton pour valider la réponse
        temps_restant = temps_total;                                                                        // Remet le temps pour écrire à 0
    },1000);                                                                                                // Temps du délai
}

function pause(ms) {
    /* Effectuer une pause dans le programme */
    return new Promise(resolve => setTimeout(resolve, ms));                                                 // Renvoie une prommesse avec en paramétre la fonction "resolve" (appelé lorque la prommesse est créé) qui résout la fonction "setTimeout" qui résout elle même après un certain délai(en ms) la fonction "resolve" qui indique que la prommesse est résolue
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
let zone_niv = document.getElementsByClassName("container");                                                // Sélectionne les élements avec la class = "liste_jeux"
let boxShadow = document.getElementsByClassName("boxshadow");                                               // Sélectionne les élements avec la class = "boxshadow"
let footer = document.getElementById("footer");                                                             // Sélectionne l'élements avec l'id = "footer"
let indice_mot_courant = 0;                                                                                 // Definit l'indice du mot courant
let score = 0;                                                                                              // Met le score du joueur à 0
let temps_total = 15;                                                                                       // Definit le temps maximum pour répondre à la question (en seconde)
let temps_restant = temps_total;                                                                            // Definit le temps qu'il reste au joueur pour écire
let temps_element = document.getElementById("temps_restants");                                              // Séléctionne l'élément avec l'id = "temps_restants"


//---------------------------------------------------Constante--------------------------------------------//
const list_mots = [                                                                                         // Definit la liste des mots a écrire
    "chat", "chien", "éléphant", "aéroport", "théière", "bicyclette", 
    "méthodique", "responsabilité", "ordinateur", "connaissance", 
    "philosophie","peinture", "conseils", "miette", "gencives",
    "assistant", "mallette", "perroquet", "inattendu", "gingembre",
    "anticonstitutionnellement"
];
const intervalId = setInterval(() => {                                                                      // Intervalle de temps de 1 seconde pour mettre a jour le temps restant pour rep
    temps_element.textContent = `Temps restant : ${temps_restant} secondes`;                                // Met à jour l'affichage
    temps_restant--;                                                                                        // Diminue le temps restant de 1

    if (temps_restant < -1) {                                                                               // Si le temps restant = 0
        temps_element.textContent = "Temps restant : 0 secondes";                                           // Mettre à jour l'affichage du temps restant
        entre_utilisateur = "";                                                                             // S'assure que l'entré utilisateur il y a quelque chose de saisie
        verifier_mot();                                                                                     // Appelle la fonction pour vérifier le mot
        temps_restant = temps_total;                                                                        // Remet le temps pour écrire à 0
    }
}, 1000);

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

window.addEventListener("load", async function(){                                                           // Fonction qui s'éxécute lorsque la page est totalement chargé
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
    await pause(1500);                                                                                      // Attend 1.5 seconde
    afficher_nouveau_mot();                                                                                 // Affiche le premier mot
});