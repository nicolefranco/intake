// // maak een object met alle dropdown elementen .dropdown elementen
 var dropdown = document.getElementsByClassName("button-dropdown");
// // loop door "dropdown"
// // aan de hand van hoeveel dropdown elementen er zijn gevonden loop je er door heen en elke keer als je dat loopje doet gaat die functie for uitvoeren.
 for (var d = 0; d < dropdown.length; d++) {
     //verstuur elk element naar de "dropdownListen" functie om te bepalen wanneer er op geklikt wordt
     dropdownListen(dropdown[d]);
 }

 function dropdownListen(elem) {
     elem.onclick = function (e) {
         //ga niet veder als er binnen de dropdown is geklikt
         if (!e.target.matches('.dropdown-menu-item, .dropdown-body, p')) {
             // Als er een huidige dropdown nog niet open is, check dan alle andere en sluit deze als deze open zijn.
             if (!this.classList.contains('active')) {
                 // maak een object met alle dropdown elementen .dropdown elementen, opnieuw
                 var dropdowns = document.getElementsByClassName("dropdown");
                 // loop door de "dropdowns"
                 for (var d = 0; d < dropdowns.length; d++) {
                     var openDropdown = dropdowns[d];
                     // verwijder class "active" als er een open dropdown word gevonden
                     if (openDropdown.classList.contains('active')) {
                         openDropdown.classList.remove('active');
                     }
                 }
             }
             //toggle (aan/uit) de class van de dropdown dat geklikt word.
             this.classList.toggle('active');
         }
     };
 }
 document.onclick = function (e) {
     //sluit elke open dropdown wanneer er geklikt buiten de dropdown
     if (!e.target.matches('.dropdown-toggle, .dropdown-menu-item, .dropdown-body, p')) {
         // maak een object met alle dropdwon elementen, opnieuw
         var dropdowns = document.getElementsByClassName("dropdown");
         // loop door dropdowns
         for (var d = 0; d < dropdowns.length; d++) {
             var openDropdown = dropdowns[d];
             //verwijder class active als er een open dropdwon is gevonden
             if (openDropdown.classList.contains('active')) {
                 openDropdown.classList.remove('active');
             }
         }
    }
}

//1.scroll to top functionalteit. Eerst haal je de root element. document.documentElement kan alles vinden bij rootElement.
var rootElement = document.documentElement;

var scrollToTopBtn = document.querySelector(".scroll-to-top-button")

//3. handleScroll is een scroll functie die checkt of de scroll to top button moet laten zien (icoontje)
function handleScroll() {
    // scrollTotal is de totale waarde van hoe ver iemand kan scrollen op de pagina. De Rootelement.scrollheigt is de height van de hele pagina en de rootElement.clientheight 
    //is de grote van het scherm voor de gebruiker
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
console.log(rootElement.scrollTop / scrollTotal);
    // scrollTop is waar de gebruiker op de pagina is. 
    if ((rootElement.scrollTop / scrollTotal) > 0.60) {
        // Toon button
        scrollToTopBtn.classList.add("showBtn");
    } else {
        // zo niet verberg button
        scrollToTopBtn.classList.remove("showBtn");
    }
}
//2. Op het moment dat je een heel klein beetje scrolt of veel dan gebeurd het volgende(handlescroll). 
document.addEventListener("scroll", handleScroll);

//je zoekt met document.getElementById dus top-button om vervolgens een event aan mee te geven en dit is dan dat wanneer er op geklikt word de gebruiker naar de top gebracht word
var topButtton = document.getElementById("top-button");
topButtton.addEventListener("click", scrollToTop);
function scrollToTop() {
    //window is een ander een element die javascript kan gebruiken om te kunnen manipuleren.
    window.scrollTo({top: 0, behavior: "smooth"});
}

// Verandering van Mario naar Kirby als er op geklikt
// we zoeken hier 3 elementen mario, kirby, marioKirby en die slaan we op in var
var mario = document.getElementById("mario");
var kirby = document.getElementById("kirby");
var marioKirby = document.getElementById("marioKirby");

// daarn zetten we op marioKirby een clickevent
marioKirby.addEventListener("click", changeCharacters);

function changeCharacters() {
    mario.classList.toggle('show');
    kirby.classList.toggle('show');
}