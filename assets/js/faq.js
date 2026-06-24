// FOOTER YEAR
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");

        menuBtn.innerHTML =
            menu.classList.contains("show")
                ? "&times;"
                : "☰";
    });
}

// FAQ ACCORDION
document.querySelectorAll(".faq-question")
.forEach(item => {

    item.addEventListener("click", () => {

        const answer =
            item.nextElementSibling;

        const icon =
            item.querySelector("span");

        answer.classList.toggle("show");

        icon.innerHTML =
            answer.classList.contains("show")
                ? "−"
                : "+";
    });

});