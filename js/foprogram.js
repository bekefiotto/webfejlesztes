const menuKapcsolo = document.querySelector('.menu-kapcsolo');
const navigacioLista = document.querySelector('.fo-navigacio ul');

menuKapcsolo.addEventListener('click', () => {
    // A nyitott CSS osztály hozzáadása/eltávolítása a listáról
    // (ez az osztály váltja át a display: none-t display: flex-re)
    navigacioLista.classList.toggle('nyitott'); //A toggle egy elem css osztályát oda-vissza váltja

    //A gomb szövegének váltása
    if (navigacioLista.classList.contains('nyitott')) {
        menuKapcsolo.textContent = 'Bezár';
    } else {
        menuKapcsolo.textContent = 'Menü';
    }
});