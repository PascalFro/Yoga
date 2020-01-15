/* 
 * Script en Jquery
 */

// Fonction magique : $()

$(document).ready(init);

function init() {
    // Rôle : Fonction d'initialisation du document
    
    // Positionne les évènements à traiter
    $(window).scroll(menuScrolled);
    $(window).scroll(backToTop);
}

function menuScrolled () {
    // Rôle : changement des classes du header s'il est positionné en dessous du slider
    // Retour : Néant
    // Paramètres : Néant
    
    // Récupérer le header dans le DOM
    var header = document.querySelector("header");
        // Récupérer le slider dans le DOM
    var slider = document.getElementById("slider");
       // Récupérer la position dans la fenêtre
    var position_fenetre = window.pageYOffset; // On récupère en pixels, la position du haut de la fenêtr/e   
    // Récupérer la position du bas du slider : c'sest la position du haut du slider à laquelle on ajoute ala hauteur du slider (qui correspond à la hauteur de l'mimage - la hauteru du header
    var bas_slider = slider.offsetTop + slider.offsetHeight - header.offsetHeight;
    
    if (position_fenetre > bas_slider) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    }
    
    
    /*if ($(window).scrollTop() > $("#slider").position().top + $("#slider").height()) {
        $("header").addClass("header_scroll");
    } else {
        $("header").removeClass("header_scroll");
    }*/
}
    


function backToTop() {
    //Rôle : changer la classe du picto "back to top" dès que la page a été scrollée
    // Retour : Néant
    // Paramètres : Néant

 // Algorithme :
    // récupérer le picto back to home
    var back_to_top = document.getElementById("back-to-top");
    //récupèrer la position de la page
    var position_fenetre = window.pageYOffset;
    // Si on scroll sur la page et qu'on descend de plus de 800 px,
    if ( position_fenetre > 800) {
    // enlever la class active
    back_to_top.classList.remove("inactive");
    // mettre la class inactive
    back_to_top.classList.add("active");
    // Si on ne scroll pas sur la page,
    } else {
    // enlever la class active
    back_to_top.classList.remove("active");
    // mettre la class inactive
    back_to_top.classList.add("inactive");
    }

    
/*     if ($(window).scrollTop() > 800) {
        ($("#back-to-top").addClass("active"));
        ($("#back-to-top").removeClass("inactive"));
    } else {
        ($("#back-to-top").addClass("inactive"));
        ($("#back-to-top").removeClass("active"));
    }*/
}
