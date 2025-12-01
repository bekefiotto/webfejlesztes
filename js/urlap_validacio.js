document.addEventListener('DOMContentLoaded', function() {
    
    const urlap = document.getElementById('visszajelzes-urlap');
    const nevInput = document.getElementById('nev');
    const emailInput = document.getElementById('email');
    const jelszoInput = document.getElementById('jelszo');
    const temaSelect = document.getElementById('tema');
    
    function hibaMegjelenites(elemId, uzenet) {
        const hibaSpan = document.getElementById(elemId + '-hiba');
        const inputElem = document.getElementById(elemId); 

        if (hibaSpan) {
            hibaSpan.textContent = uzenet; 
        }
        if (inputElem) {
            inputElem.classList.add('hibas-input');
        }
    }

    function hibaEltuntetes(elemId) {
        const hibaSpan = document.getElementById(elemId + '-hiba');
        const inputElem = document.getElementById(elemId); 

        if (hibaSpan) {
            hibaSpan.textContent = '';
        }
        if (inputElem) {
            inputElem.classList.remove('hibas-input');
        }
    }

    const Inputellenorzes = () => {
        
        const nevErtek = nevInput.value.trim();
        const emailErtek = emailInput.value.trim();
        const jelszoErtek = jelszoInput.value;
        const temaErtek = temaSelect.value;
        const rajongoTipusElem = document.querySelector('input[name="rajongo-tipus"]:checked');
        const rajongoTipusErtek = rajongoTipusElem ? rajongoTipusElem.value : '';
        
        let hibatlan = true;

        // 1. Név ellenőrzése: Csak üres mező
        if (nevErtek === '') {
            hibaMegjelenites('nev', 'A név mező nem lehet üres.');
            hibatlan = false;
        } else {
            hibaEltuntetes('nev');
        }

        // 2. E-mail ellenőrzése
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailErtek)) {
            hibaMegjelenites('email', 'Érvényes e-mail címet adjon meg.');
            hibatlan = false;
        } else {
            hibaEltuntetes('email');
        }

        // 3. Jelszó ellenőrzése
        if (jelszoErtek.length < 8) {
            hibaMegjelenites('jelszo', 'A jelszónak legalább 8 karakter hosszúnak kell lennie.');
            hibatlan = false;
        } else {
            hibaEltuntetes('jelszo');
        }

        // 4. Téma ellenőrzése
        if (temaErtek === "") {
            hibaMegjelenites('tema', 'Kérjük, válasszon egy üzenet témát.');
            hibatlan = false;
        } else {
            hibaEltuntetes('tema');
        }
        
        // 5. Rádió gomb ellenőrzése
        if (rajongoTipusErtek === "") {
            hibaMegjelenites('radio', 'Kérjük, válassza ki a rajongó típusát.');
            hibatlan = false;
        } else {
            hibaEltuntetes('radio');
        }
        
        return hibatlan;
    };
    
    // Submit Eseménykezelő
    urlap.addEventListener("submit", e => {
        const sikeres = Inputellenorzes(); 
        
        if (sikeres) {
            alert('A visszajelzés sikeresen elküldve! Köszönjük a visszajelzést.');
        } else {
            e.preventDefault();
            alert('Kérjük, javítsa az űrlapon található hibákat a küldés előtt.');
        }
    });

});