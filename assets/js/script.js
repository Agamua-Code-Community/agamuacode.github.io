/* ====================================
   AGAMUACODE-COMMUNITY SCRIPT.JS
==================================== */

/* =========================
   FOOTER YEAR
========================= */
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}



/* =========================
   COUNTER
========================= */
function counter(id, target) {

    const el = document.getElementById(id);

    if (!el) return;

    let count = 0;

    const interval = setInterval(() => {

        count++;
        el.innerHTML = count;

        if (count >= target) {
            clearInterval(interval);
        }

    }, 20);
}

/* Counter Halaman About */
counter("member", 150);
counter("project", 25);
counter("training", 50);
counter("mentor", 10);

/* Counter Halaman Services */
counter("student", 250);
counter("course", 75);
counter("project", 35);
counter("mentor", 15);

/* =========================
   FAQ ACCORDION
========================= */
document.querySelectorAll(".faq-question")
    .forEach(item => {

        item.addEventListener("click", () => {

            const answer =
                item.nextElementSibling;

            if (!answer) return;

            answer.classList.toggle("show");

            if (answer.classList.contains("show")) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }

        });

    });

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

    const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuBtn.classList.toggle("active");

    menuBtn.innerHTML =
        menu.classList.contains("show")
            ? "&times;"
            : "&#9776;";
});