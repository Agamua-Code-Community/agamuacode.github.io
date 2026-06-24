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

counter('member', 150);
counter('project', 25);
counter('training', 50);
counter('mentor', 10);

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuBtn.innerHTML = '&times;';
    } else {
        menuBtn.innerHTML = '&#9776;';
    }
});