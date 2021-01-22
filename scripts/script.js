// maak een object met alle dropdown elementen .dropdown elementen
var dropdown = document.getElementsByClassName("button-dropdown");
// loop door "dropdown"
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

//scroll naar top functionalteit
var rootElement = document.documentElement;
var scrollToTopBtn = document.querySelector(".scroll-to-top-button")

function handleScroll() {
    // Die iets wanneer er gescrollt wordt
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal) > 0.60) {
        // Toon button
        scrollToTopBtn.classList.add("showBtn");
    } else {
        // verberg button
        scrollToTopBtn.classList.remove("showBtn");
    }
}
document.addEventListener("scroll", handleScroll);

// Mario, Kirby onclick verandering
var mario = document.getElementById("mario");
var kirby = document.getElementById("kirby");
function changeCharacters() {
    mario.classList.toggle('show');
    kirby.classList.toggle('show');
}