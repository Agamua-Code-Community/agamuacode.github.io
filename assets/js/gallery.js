// YEAR
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// MENU MOBILE
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

// TUTUP MENU SAAT LINK DIKLIK
document.querySelectorAll("#menu a")
.forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.innerHTML = "☰";
    });

});