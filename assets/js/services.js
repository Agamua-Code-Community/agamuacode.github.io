document.getElementById('year').innerHTML =
    new Date().getFullYear();

function counter(id, target) {
    let count = 0;

    const interval = setInterval(() => {
        count++;

        document.getElementById(id).innerHTML = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 20);
}

counter('student', 250);
counter('course', 75);
counter('project', 35);
counter('mentor', 15);

const menuBtn =
    document.getElementById('menuBtn');

const menu =
    document.getElementById('menu');

menuBtn.addEventListener('click', () => {

    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuBtn.innerHTML = '✕';
    } else {
        menuBtn.innerHTML = '☰';
    }
});