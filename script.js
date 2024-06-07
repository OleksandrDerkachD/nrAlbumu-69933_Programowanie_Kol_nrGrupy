class Ksiazka {
    constructor(tytul, rokWydania, imieAutora, nazwiskoAutora) {
        this.tytul = tytul;
        this.rokWydania = rokWydania;
        this.imieAutora = imieAutora;
        this.nazwiskoAutora = nazwiskoAutora;
    }

    pelneImieNazwiskoAutora() {
        return `${this.imieAutora} ${this.nazwiskoAutora}`;
    }
}

const ksiazki = [
    new Ksiazka("Wi", 1955, "b", "To"),
    new Ksiazka("1555", 1, "Geo", "Orwell"),
    new Ksiazka("Du", 1815, "ne", "Aus"),
    new Ksiazka("a", 1867, "F", "Dosi")
];

function wypiszKsiazkiZRoku() {
    const rok = document.getElementById("rok").value;
    const listaKsiazek = document.getElementById("listaKsiazek");
    listaKsiazek.innerHTML = ""; 

    ksiazki.forEach(ksiazka => {
        if (ksiazka.rokWydania == rok) {
            const listItem = document.createElement("li");
            listItem.textContent = `Tytuł: ${ksiazka.tytul}, Autor: ${ksiazka.pelneImieNazwiskoAutora()}`;
            listaKsiazek.appendChild(listItem);
        }
    });
}
