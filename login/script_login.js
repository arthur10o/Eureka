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
    button_submit.style.color = couleur_fonce;                                                              // Change la couleur du boutton pour s'inscrire
    button_submit.style.background = couleur_claire;                                                        // Change le background du boutton pour s'inscrire

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les élements de la class = "a"
        a[i].style.color = couleur_fonce;                                                                   // Change la couleur des éléments de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les élements de la class = "icon"
        icon[i].style.color = couleur_fonce;                                                                // Change la couleur des éléments de la class = "icon" un par un
    }
    for (let i = 0; i < zone_co.length; i++){                                                              // Boucle pour parcourir tous les élements de la class = "liste_jeux"
        zone_co[i].style.color = couleur_fonce;                                                            // Change la couleur des éléments de la class = "liste_jeux" un par un
        zone_co[i].style.backgroundColor = couleur_claire;                                                 // Change le background des éléments de la class = "liste_jeux" un par un
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
    button_submit.style.color = couleur_claire;                                                             // Change la couleur du boutton pour s'inscrire
    button_submit.style.background = couleur_fonce;                                                         // Change le background du boutton pour s'inscrire

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les éléments de la class = "a"
        a[i].style.color = couleur_claire;                                                                  // Change les élements de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les éléments de la class = "icon"
        icon[i].style.color = couleur_claire;                                                               // Change les élements de la class = "icon" un par un
    }
    for (let i = 0; i < zone_co.length; i++){                                                              // Boucle pour parcourir tous les élements de la class = "icon"
        zone_co[i].style.color = couleur_claire;                                                           // Change la couleur des éléments de la class = "liste_jeux" un par un
        zone_co[i].style.backgroundColor = couleur_fonce;                                                  // Change le background des éléments de la class = "liste_jeux" un par un
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

async function hashed(elem_a_hashed){
    /* Function pour haché les differend éléments en sha-256*/
    const encoder = new TextEncoder();                                                                      // Préparation d'un "encodeur" pour convertir une chaine de caractére en une séquence binaire
    const elem_converti_val_ascii = encoder.encode(elem_a_hashed);                                          // Convertit l'élément à haché en un tableau d'octets
    const elem_hashed = await crypto.subtle.digest("SHA-256", elem_converti_val_ascii);                     // Utilise l'API Web Crypto pour effectuer un hachage crypthographique en SHA-256. await permet d'attendre que le hachage soit terminé avent de passer à la suite du programme
    const elem_converti_octets = Array.from(new Uint8Array(elem_hashed));                                   // Créé un tableau d'entier a partir de la constante elem_hashed
    const elem_hashed_octet_to_hex = elem_converti_octets.map(byte => byte.toString(16).padStart(2, '0')).join('');// Transforme le tableau d'octet en une chaine hexadécimale. Pour chaque octet dans elem_converti_octets, la fonction toString(16) est appelée pour convertir l'octet en hexadécimal. padStart(2,'0') s'assure que chaque caractére hexadécimal est réprésenté par deux caractère ajoutant un zéro au début si besoin. join('') concaténe tous les éléments du tableau en une seul chaine
    return elem_hashed_octet_to_hex;                                                                        // Renvoie l'élément à haché haché
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
let zone_co = document.getElementsByClassName("container");                                                // Sélectionne les élements avec la class = "liste_jeux"
let boxShadow = document.getElementsByClassName("boxshadow");                                               // Sélectionne les élements avec la class = "boxshadow"
let button_submit = document.getElementById("boutton_submit");                                              // Sélectionne l'élément avec l'id = "boutton_submit"
let etat_connexion = false;                                                                                 // Definit l'état si le joueur est connecté ou non (false = pas connecté ; true = connecté)



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
    changer_etat_bouton_claire_sombre();                                                                    // Mettre à jour l'état jour / nuit
});

button_submit.addEventListener("mouseover", function(){                                                     // Si la souris survole le boutton pour s'inscrire :
    button_submit.style.color = "#ffff";                                                                    // Changer la couleur du texte de ce boutton 
});

button_submit.addEventListener("mouseout", function(){                                                      // Si la souris quitte le boutton pour s'inscire :
    if(etat_mode_claire_sombre == 0){                                                                       // Si l'état du mode claire/sombre  = 0
        activer_mode_clair();                                                                               // Activer le mode claire
    }
    else{                                                                                                   // Sinon :
        activer_mode_sombre();                                                                              // Activer le mode sombre
    }
});

document.getElementById("login_form").addEventListener("submit", async function(event) {                    // Si le boutton se connecté est clické :
    event.preventDefault();                                                                                 // Empeche l'envoi du formulaire par défaut
    
    const nom_utilisateur = document.getElementById("nom_utilisateur").value;                               // Récupére la valeur de l'élément avec l'id = nom_utilisateur
    const mot_de_passe = document.getElementById("mot_de_passe").value;                                     // Récupére la valeur de l'élément avec l'id = mot_de_passe
    const mot_de_passe_hashed = await hashed(mot_de_passe);                                                 // Appelle la fonction hashed() pour haché le mot de passe

    let liste_utilisateur = JSON.parse(localStorage.getItem("utilisateurs")) || [];                         // Récupère la liste des utilisateurs dans le localStorage
    let utilisateur_trouve = false;                                                                         // Variable pour savoir si l'utilisateur à été trouvé

    for(let user of liste_utilisateur){                                                                     // Parcours tout les éléments du dictionnaire avec les infos des utilisateurs
        if(user.username == nom_utilisateur){                                                               // Si l'username correspond à l'un d'entre eux
            if(user.password == mot_de_passe_hashed){                                                       // Et le mot de passe aussi
                utilisateur_trouve = true;                                                                  // Mettre utilisateur_trouve à true
                etat_connexion = true;                                                                      // Mettre l'état de connexion à true
                break;                                                                                      // Sortir de la boucle
            }
        }
    }

    if(utilisateur_trouve){                                                                                 // Si utilisateur_trouve = true
        localStorage.setItem('etat_connexion',etat_connexion);                                              // Met à jour l'état de connexion
        window.location.href = "../index/index.html";                                                       // Redirige l'utilisateur vers l'index une fois inscrit
        localStorage.setItem("nom_utilisateur", nom_utilisateur);                                           // Transforme liste_user en chaine JSON puis la sauvegarde dans le local storage sous la clé utilisateurs. Si elle existe déja, sa valeur sera remplacé par la nouvelle chaine sinon elle sera créé
    }
    else{
        etat_connexion = false;                                                                             // Mettre etat connexion à false
        document.getElementById("message_d_erreur").style.display = "block";                                // afficher le message d'érreur
        localStorage.setItem('etat_connexion',etat_connexion);                                              // Met à jour l'état de connexion
        return;                                                                                             // Renvoyer la fonction pour mettre fin a celle ci
    }
});