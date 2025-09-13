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

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les élements de la class = "a"
        a[i].style.color = couleur_fonce;                                                                   // Change la couleur des éléments de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les élements de la class = "icon"
        icon[i].style.color = couleur_fonce;                                                                // Change la couleur des éléments de la class = "icon" un par un
    }
    for (let i = 0; i < zone_stat.length; i++){                                                              // Boucle pour parcourir tous les élements de la class = "liste_jeux"
        zone_stat[i].style.color = couleur_fonce;                                                            // Change la couleur des éléments de la class = "liste_jeux" un par un
        zone_stat[i].style.backgroundColor = couleur_claire;                                                 // Change le background des éléments de la class = "liste_jeux" un par un
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

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les éléments de la class = "a"
        a[i].style.color = couleur_claire;                                                                  // Change les élements de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les éléments de la class = "icon"
        icon[i].style.color = couleur_claire;                                                               // Change les élements de la class = "icon" un par un
    }
    for (let i = 0; i < zone_stat.length; i++){                                                              // Boucle pour parcourir tous les élements de la class = "icon"
        zone_stat[i].style.color = couleur_claire;                                                           // Change la couleur des éléments de la class = "liste_jeux" un par un
        zone_stat[i].style.backgroundColor = couleur_fonce;                                                  // Change le background des éléments de la class = "liste_jeux" un par un
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
        lien_login.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>Se Déconnecté';                  // Changer l'icon et le text pour passer de Se Connecter à Se Déconnecté
        lien_login.href = "../index/index.html";                                                            // Redirige vers l'index en cas de déconnexion
    }
    else {
        lien_login.innerHTML = '<ion-icon name="person-outline" class="icon hover"></ion-icon>Se Connecter';// Changer l'icon et le text pour passer de Se Déconnecté à Se Connecter
        lien_login.href = "../login/login.html";                                                            // Ajoute l'hyperlien pour accèder au login
    }
}

async function maj_stat_joueur(){
    /* Fonction pour récupéré toute les stats du joueur connecté puis pour les afficher */
    let info_utilisateur = JSON.parse(localStorage.getItem("utilisateurs"));
    let user_connect = localStorage.getItem("nom_utilisateur");
    let chercher_utilisateur = info_utilisateur.find(utilisateurs => utilisateurs.username === user_connect);

    document.getElementsByClassName("nom_user")[0].innerText = "Statistique de " + user_connect;

    document.getElementById("ecrit_tout").innerText = "Votre meilleur score est de " + chercher_utilisateur.stat_meilleur_score.ecrit_tout + " points sur 21 points";
    
    document.getElementById("quizz_anglais_facile").innerText = "Niveau d'anglais facile : " + chercher_utilisateur.stat_meilleur_score.quizz.Anglais[0][1] + " points sur 3 points";
    document.getElementById("quizz_anglais_moyen").innerText = "Niveau d'anglais moyen :  " + chercher_utilisateur.stat_meilleur_score.quizz.Anglais[1][1] + " points sur 3 points";
    document.getElementById("quizz_anglais_difficile").innerText = "Niveau d'anglais difficile : " + chercher_utilisateur.stat_meilleur_score.quizz.Anglais[2][1] + " points sur 3 points";
    document.getElementById("quizz_anglais_expert").innerText = "Niveau d'anglais expert : " + chercher_utilisateur.stat_meilleur_score.quizz.Anglais[3][1] + " points sur 3 points";
    
    document.getElementById("quizz_culture_G_facile").innerText = "Niveau d'NSI facile : " + chercher_utilisateur.stat_meilleur_score.quizz.NSI[0][1] + " points sur 3 points";
    document.getElementById("quizz_culture_G_moyen").innerText = "Niveau d'NSI moyen : " + chercher_utilisateur.stat_meilleur_score.quizz.NSI[1][1] + " points sur 3 points";
    document.getElementById("quizz_culture_G_difficile").innerText = "Niveau d'NSI difficile : " + chercher_utilisateur.stat_meilleur_score.quizz.NSI[2][1] + " points sur 3 points";
    document.getElementById("quizz_culture_G_expert").innerText = "Niveau d'NSI expert : " + chercher_utilisateur.stat_meilleur_score.quizz.NSI[3][1] + " points sur 3 points";

    document.getElementById("quizz_NSI_facile").innerText = "Niveau de culture G facile : " + chercher_utilisateur.stat_meilleur_score.quizz.culture_G[0][1] + " points sur 3 points";
    document.getElementById("quizz_NSI_moyen").innerText = "Niveau de culture G moyen : " + chercher_utilisateur.stat_meilleur_score.quizz.culture_G[1][1] + " points sur 3 points";
    document.getElementById("quizz_NSI_difficile").innerText = "Niveau de culture G difficile : " + chercher_utilisateur.stat_meilleur_score.quizz.culture_G[2][1] + " points sur 4 points";
    document.getElementById("quizz_NSI_expert").innerText = "Niveau de culture G expert : " +chercher_utilisateur.stat_meilleur_score.quizz.culture_G[3][1] + " points sur 4 points";
    
    document.getElementById("quizz_histoire_facile").innerText = "Niveau d'histoire facile : " + chercher_utilisateur.stat_meilleur_score.quizz.histoire[0][1] + " points sur 3 points";
    document.getElementById("quizz_histoire_moyen").innerText = "Niveau d'histoire moyen : " + chercher_utilisateur.stat_meilleur_score.quizz.histoire[1][1] + " points sur 3 points";
    document.getElementById("quizz_histoire_difficile").innerText = "Niveau d'histoire difficile : " + chercher_utilisateur.stat_meilleur_score.quizz.histoire[2][1] + " points sur 3 points";
    document.getElementById("quizz_histoire_expert").innerText = "Niveau d'histoire expert : " +chercher_utilisateur.stat_meilleur_score.quizz.histoire[3][1] + " points sur 6 points";

    document.getElementById("quizz_mathe_facile").innerText = "Niveau de mathe facile : " + chercher_utilisateur.stat_meilleur_score.quizz.mathe[0][1] + " points sur 3 points";
    document.getElementById("quizz_mathe_moyen").innerText = "Niveau de mathe moyen : " + chercher_utilisateur.stat_meilleur_score.quizz.mathe[1][1] + " points sur 3 points";
    document.getElementById("quizz_mathe_difficile").innerText = "Niveau de mathe difficile : " + chercher_utilisateur.stat_meilleur_score.quizz.mathe[2][1] + " points sur 3 points";
    document.getElementById("quizz_mathe_expert").innerText = "Niveau de mathe expert : " +chercher_utilisateur.stat_meilleur_score.quizz.mathe[3][1] + " points sur 3 points";

    document.getElementById("quizz_physique_facile").innerText = "Niveau de physique facile : " + chercher_utilisateur.stat_meilleur_score.quizz.physique[0][1] + " points sur 3 points";
    document.getElementById("quizz_physique_moyen").innerText = "Niveau de physique moyen : " + chercher_utilisateur.stat_meilleur_score.quizz.physique[1][1] + " points sur 3 points";
    document.getElementById("quizz_physique_difficile").innerText = "Niveau de physique difficile : " + chercher_utilisateur.stat_meilleur_score.quizz.physique[2][1] + " points sur 3 points";
    document.getElementById("quizz_physique_expert").innerText = "Niveau de physique expert : " +chercher_utilisateur.stat_meilleur_score.quizz.physique[3][1] + " points sur 4 points";
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
let zone_stat = document.getElementsByClassName("container");                                                // Sélectionne les élements avec la class = "liste_jeux"
let boxShadow = document.getElementsByClassName("boxshadow");                                               // Sélectionne les élements avec la class = "boxshadow"


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

    maj_stat_joueur();
    maj_etat_connexion_visuel();                                                                            // Appelle la fonction maj_etat_connexion_visuel()
    changer_etat_bouton_claire_sombre();                                                                    // Mettre à jour l'état jour / nuit
});