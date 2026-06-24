// YEAR
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// MENU
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

// CLOSE MENU
document.querySelectorAll("#menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");
        menuBtn.innerHTML = "☰";

    });

});

// FORM
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Pesan berhasil dikirim. Terima kasih telah menghubungi AgamuaCode-Community."
        );

        form.reset();
    });
}