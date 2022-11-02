let woerterEasy = ['Hut', 'Haus', 'Boot', 'Test', 'Buch']; // 1-4 Buchstaben
let woerterMedium = ['Banane', 'Telefon', 'Ananas', 'Katze', 'Monitor']; // 5-7 Buchstaben
let woerterHard = ['Computer', 'Fernseher', 'Videospiele', 'Smartphone']; // 8-?? Buchstaben

let randomWort = '';
let loesungWort = '';
let shuffldWort = '';
let leben = 0;

let prompt = require('prompt-sync')({
    sigint: true
});

console.log(`
Schwierigkeitsgrad wählen:
1: Easy -- 2: Medium -- 3: Hard
`)
let diffInput = prompt('Eingabe: ')

switch (diffInput) {
    case 1:
        randomWort += woerterEasy[Math.floor(Math.random() * woerterEasy.length)];
        loesungWort += randomWort;
        shuffldWort += shuffleWort(randomWort);
        leben += 10;
        break;
    case 2:
        randomWort += woerterMedium[Math.floor(Math.random() * woerterMedium.length)];
        loesungWort += randomWort;
        shuffldWort += shuffleWort(randomWort);
        leben += 7;
        break;
    case 3:
        randomWort += woerterHard[Math.floor(Math.random() * woerterHard.length)];
        loesungWort += randomWort;
        shuffldWort += shuffleWort(randomWort);
        leben += 4;
        break;
    default:
        break;
}

function shuffleWort(wort) {
    let shuffWort = ''
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


let mischWort = shuffleWort(randomWort);
while (true) {
    console.log(`Das gemischte Wort ist: ${mischWort}`)

    let input = prompt('Eingabe: ');

    if (input == loesungWort) {
        console.log(`Richtig! ${loesungWort} war die Antwort.`);
        break;
    } else {
        leben--;
        console.log(`Leider Falsch. ${leben} leben verbleiben.`)
        if (leben <= 0) {
            console.log('Game over')
            break;
        }
    }

}