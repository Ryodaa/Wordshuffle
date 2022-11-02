let woerterEasy = ['Hut', 'Haus', 'Boot', 'Test', 'Buch']; // 1-4 Buchstaben
let woerterMedium = ['Banane', 'Telefon', 'Ananas', 'Katze', 'Monitor']; // 5-7 Buchstaben
let woerterHard = ['Computer', 'Fernseher', 'Videospiele', 'Smartphone']; // 8-?? Buchstaben

let randomWort = null;
let loesungWort = null;
let shuffldWort = null;
let difficulty = null;
let uppercaseTick = null;
let leben = 0;

let prompt = require('prompt-sync')({
    sigint: true
});

console.log(`
        Schwierigkeitsgrad wählen:
        1: Easy -- 2: Medium -- 3: Hard`);
let diffInput = Number(prompt('Eingabe: '));


switch (diffInput) {
    case 1:
        randomWort = woerterEasy[Math.floor(Math.random() * woerterEasy.length)];
        loesungWort = randomWort;
        shuffldWort = shuffleWort(randomWort);
        leben = 10;
        difficulty = 'Easy';
        break;
    case 2:
        randomWort = woerterMedium[Math.floor(Math.random() * woerterMedium.length)];
        loesungWort = randomWort;
        shuffldWort = shuffleWort(randomWort);
        leben = 7;
        difficulty = 'Medium';
        break;
    case 3:
        randomWort = woerterHard[Math.floor(Math.random() * woerterHard.length)];
        loesungWort = randomWort;
        shuffldWort = shuffleWort(randomWort);
        leben = 4;
        difficulty = 'Hard';
        break;
    default:
        break;
}
console.log(`
        Uppercase Zeichen anzeigen?:
        1: Yes -- 2: No`);
let inputUpper = Number(prompt('Eingabe: '));

if (inputUpper === 1) {
    uppercaseTick = true;
} else {
    uppercaseTick = false;
}

function shuffleWort(wort) {
    let shuffWort = '';
    let oldWort = wort;
    let newWort = wort;
    for (i in wort) {
        let num = Math.floor(Math.random() * newWort.length);
        shuffWort = shuffWort + newWort[num];
        newWort = newWort.replace(newWort[num], '');
    };
    if (shuffWort != oldWort) {
        return shuffWort;
    } else if (shuffWort == oldWort) {
        return shuffleWort(oldWort);
    }
};

console.log(`
        Schwierigkeitsgrad ist: ${difficulty}
        Du hast ${leben} leben`);

while (true) {
    if (uppercaseTick === true) {
        console.log(`
        Das gemischte Wort ist: ${shuffldWort}`);
    } else {
        console.log(`
        Das gemischte Wort ist: ${shuffldWort.toLowerCase()}`);
    }

    let input = prompt('Eingabe: ').toLowerCase();

    if (input == loesungWort.toLowerCase()) {
        console.log(`
        Richtig! ${loesungWort} war die Antwort.`);
        break;
    } else {
        leben--;
        console.log(`
        Leider Falsch. ${leben} leben verbleiben.`);
        if (leben <= 0) {
            console.log(`
        Game over`);
            break;
        }
    }

}
console.log(`
        Danke fürs Spielen!`)