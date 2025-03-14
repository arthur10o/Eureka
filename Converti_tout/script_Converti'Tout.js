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
    input_monaie.style.backgroundColor = couleur_claire;                                                    // Change le bacground color de l'élément avec l'id = valeur_depart
    input_monaie.style.borderColor = couleur_fonce;                                                         // Change la couleur des bords l'élément avec l'id = "valeur_depart"
    input_monaie.style.setProperty('--placeholder-color', couleur_fonce);                                   // Change la couleur du texte du placeholder dans l'élément avec l'id = "valeur_depart"

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les élements de la class = "a"
        a[i].style.color = couleur_fonce;                                                                   // Change la couleur des éléments de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les élements de la class = "icon"
        icon[i].style.color = couleur_fonce;                                                                // Change la couleur des éléments de la class = "icon" un par un
    }
    for (let i = 0; i < boxShadow.length; i++){                                                             // Boucle pour parcourir tous les élements de la class = "boxshadow"
        boxShadow[i].style.boxShadow = "0 2px 10px #7BA5D9";                                              // Change les ombres des éléments de la class = "boxshadow" un par un
    }
    for (let i = 0; i < select.length; i++){                                                                // Boucle pour parcourir tous les éléments avec la class = "select"
        select[i].style.backgroundColor = couleur_claire;                                                   // Change le background color
        select[i].style.color = couleur_fonce;                                                              // Change la couleur du texte
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
    input_monaie.style.backgroundColor = couleur_fonce;                                                     // Change le bacground color de l'élément avec l'id = valeur_depart
    input_monaie.style.borderColor = couleur_claire;                                                         // Change la couleur des bords l'élément avec l'id = "valeur_depart"
    input_monaie.style.setProperty('--placeholder-color', couleur_claire);                                   // Change la couleur du texte du placeholder dans l'élément avec l'id = "valeur_depart"

    for (let i = 0; i < a.length; i++){                                                                     // Boucle pour parcourir tous les éléments de la class = "a"
        a[i].style.color = couleur_claire;                                                                  // Change les élements de la class = "a" un par un
    }
    for (let i = 0; i < icon.length; i++){                                                                  // Boucle pour parcourir tous les éléments de la class = "icon"
        icon[i].style.color = couleur_claire;                                                               // Change les élements de la class = "icon" un par un
    }
    for (let i = 0; i < boxShadow.length; i++){                                                             // Boucle pour parcourir tous les élements de la class = "boxshadow"
        boxShadow[i].style.boxShadow = "0 2px 10px #003366";                                              // Change les ombres des éléments de la class = "boxshadow" un par un
    }
    for (let i = 0; i < select.length; i++){                                                                // Boucle pour parcourir tous les éléments avec la class = "select"
        select[i].style.backgroundColor = couleur_fonce;                                                    // Change le background color
        select[i].style.color = couleur_claire;                                                             // Change la couleur du texte
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

async function getExchangeRate(base, target) {
    /* Fonction pour récupéré le taux de change d'une monaie vers une autre grace à une api */
    const apiKey = "7e66423af8e3895ade4fbe1c36c10947";                                                      // Clé API
    const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&base=${base}&symbols=${target}`;// URL pour interroger l'api
    
    try {
        const response = await fetch(url);                                                                  // Envoie une requête à l'URL
        const data = await response.json();                                                                 // Converti la réponse en objet Java Srcipt
        return data.rates[target];                                                                          // Retourne le taux de change
    } catch (error) {
        console.error("Erreur lors de la récupération des taux de change :", error);                        // Affiche message d'erreur en cas d'erreur
        return null;                                                                                        // Renvoie null
    }
}

async function convertir(){
    /* Fonction de conversion */
    const valeurDepart = parseFloat(document.getElementById("valeur_depart").value);                        // Constante avec pour valeur le champs saisie dans l'élément avec l'id = "valeur_depart", converti en float
    const monnaieDep = getDeviseCode("monnaie_dép");                                                        // fonction getDeviseCode() avec comme paramétre : "monnaie_dép". Le résultat renvoyé est stocké dans la constante monnaieDep
    const monnaieArr = getDeviseCode("monnaie_arv");                                                        // fonction getDeviseCode() avec comme paramétre : "monnaie_arv". Le résultat renvoyé est stocké dans la constante monnaieArr

    if (!valeurDepart || isNaN(valeurDepart)) {                                                             // vérifi si on a bien saisi quelque chose dans le champs de valeur de départ ou si le champs est différent de NaN
        alert("Veuillez entrer une valeur valide !");                                                       // Si ce n'est pas le cas : afficher une alert
        return;                                                                                             // Retourner la fonction pour y mettre imédiatement fin
    }

    try {
        const taux = await getExchangeRate(monnaieDep, monnaieArr);                                         // Attendre la récupération du taux de change grace a la fonction getExchangeRate()
        if (!taux) {                                                                                        // Si la fonction getExchangeRate() renvoie null :
            alert("Erreur lors de la récupération du taux de change.");                                     // Mettre message d'erreur
            return;                                                                                         // Mettre fin à la fonction
        }

        const valeurConvertie = (valeurDepart * taux).toFixed(2);                                           // Effectue le taux de change à la valeur de départ en mettant seulement deux chiffres apès la virgule
        document.getElementById("valeur_convertie").innerText = valeurConvertie + " " + monnaieArr;         // Affiche la valeur de la monaie après conversion
        document.getElementById("rate").innerText = taux.toFixed(4);                                        // Affiche le taux de conversion mis à jour avec 4 chiffres après la virgule
    } catch (error) {
        console.error("Erreur lors de la récupération du taux de change :", error);                         // Si il y une erreur alors affiché message d'erreur dans la consol Java Script
        alert("Impossible de récupérer le taux de change.");                                                // Afficher message d'erreur 
    }
}

function getDeviseCode(selectId){
    /* Fonction pour récupérer le code de la devise sélectionnée */
    const selectElement = document.getElementById(selectId);                                                // Définie la constante selectElement qui récupére l'emplacement HTML qui posséde l'id mis en paramétre de la fonction
    const selectedValue = selectElement.value;                                                              // Définie la constante selectedValue qui récupére la valeur de la constante selectElement
    const deviseMap = {                                                                                     // Definie une constante avec pour valeur un dictionnaire avec comme clef les différentes options et pour valeur la monnaire correspndante
        "option1": "EUR",
        "option2": "USD",
        "option3": "GBP",
        "option4": "CHF",
        "option5": "JPY"
    };
    return deviseMap[selectedValue];                                                                        // Renvoie le type de monnaie associé au numéro de l'options en fonction du dictionnaire deviseMap
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
let boxShadow = document.getElementsByClassName("boxshadow");                                               // Sélectionne les élements avec la class = "boxshadow"
let footer = document.getElementById("footer");                                                             // Sélectionne l'élements avec l'id = "footer"
let select = document.getElementsByClassName("select");                                                     // Sélectionne les élément avec la class = select
let input_monaie = document.getElementById("valeur_depart");                                                // Sélectionne l'élément avec l'id = valeur_depart


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