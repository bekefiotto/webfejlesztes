document.addEventListener('DOMContentLoaded', function() {
    
    const gyozelemInput = document.getElementById('gyozelem');
    const dontetlenInput = document.getElementById('dontetlen');
    const veresegInput = document.getElementById('vereseg');
    const szamolGomb = document.getElementById('szamol-gomb');
    const pontEredmenySpan = document.getElementById('pont-eredmeny');
    const osszesMeccsSpan = document.getElementById('osszes-meccs-szam');
    
    const MAX_MECCS = 38;
    const PONT_GYOZELEM = 3;
    const PONT_DONTETLEN = 1;

    function osszesMeccsFrissitese(){
        let gy = Number(gyozelemInput.value) || 0;
        let d = Number(dontetlenInput.value) || 0;
        let v = Number(veresegInput.value) || 0;
        let osszes = gy + d + v;

        osszesMeccsSpan.textContent = osszes;
    }

    function pontszamKiszamitasa() {

        let gy = Number(gyozelemInput.value) || 0;
        let d = Number(dontetlenInput.value) || 0;
        let v = Number(veresegInput.value) || 0;
        
        let osszesMeccs = gy + d + v;

        if (osszesMeccs > MAX_MECCS) {
            alert(`HIBA: Az összes meccs száma (${osszesMeccs}) nem haladhatja meg a ${MAX_MECCS}-t! Kérjük, javítsa a bemeneti adatokat.`);
            osszesMeccsSpan.style.color = 'var(--piros)';
            return; 
        }
        
        const osszPontszam = (gy * PONT_GYOZELEM) + (d * PONT_DONTETLEN);
        
        pontEredmenySpan.textContent = osszPontszam;
        osszesMeccsSpan.textContent = osszesMeccs;

        osszesMeccsSpan.style.color = 'var(--kék)';
    }
    
    
    szamolGomb.addEventListener('click', pontszamKiszamitasa);
    
    gyozelemInput.addEventListener('input', osszesMeccsFrissitese);
    dontetlenInput.addEventListener('input', osszesMeccsFrissitese);
    veresegInput.addEventListener('input', osszesMeccsFrissitese);

    osszesMeccsFrissitese();

});