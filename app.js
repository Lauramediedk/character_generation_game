const typewriterText = 'You arrive at the old tavern where you meet your buddies for a beer\nWhen you enter the tavern the inn keeper looks at you and asks you...'
const typingSpeed = 90; //Tid pr bogstav i millisekunder

function typeWriter(elementId, text, i = 0) { //3 argumenter
    if (i < text.length) { // Hvis vores i variabel er mindre end tekstens længde,
    //så er der stadig characters den mangler at display

    let currentChar = text.charAt(i); //En metode i JS som returnerer det bogstav/character med en specific index placering
    //Vi bruger dette for at få adgang til de individuelle tegn i en string, som med en typewriter effekt

    if (currentChar === "\n") { //Hvis der er et break i teksten, et \n så vil den tilføje et br html linjeskift
        document.getElementById(elementId).innerHTML += "<br>";
    } else { //Hvis ikke, vil den blot tilføje næste character til vores sætning
        document.getElementById(elementId).innerHTML += currentChar;
    }
    i++; //Vi tilføjer et nyt bogstav for hver gang den kører
    setTimeout(() => typeWriter(elementId, text, i), typingSpeed); //Timeout effekt for at danne skrive effekten,
    //hvor typeWriter kalder på sig selv, med en forsinkelse på 90 sekunder, fra vores const
    }
}

///////////////////////////////////////////////////////////////////////////////////////

function showElementAfterDelay(elementId, delay) { //Funktion hvor vi displayer vores element efter timeout
    //Den tager to argumenter, som vi udfylder senere
    setTimeout(() => {
        document.getElementById(elementId).style.display = 'block';
    }, delay + 600);
}

const totalTypingTime = typewriterText.length * typingSpeed; //Udregning af samlet tid for typewriter-effekten
//Vi tjekker længden af vores string og * med typingSpeed

//Start effekten og vi tilføjer parametre til vores funktions argumenter
typeWriter("typeText", typewriterText); //typeText er vores html ID og det andet, vores text fra vores const
showElementAfterDelay("interactive_container", totalTypingTime);
//Vi kalder vores funktion, og udfylder argumenterne fra vores funktion med vores html id og variablen hvor vi beregner tiden

///////////////////////////////////////////////////////////////////////////////////////
const wizard = {
    'name': 'Gavrel the seer',
    'class': 'Wizard',
    'Abillities': 'Echantment, Mind manipulation, Fire spells',
    'History': '...',
    'imageUrl': 'images/wizard-removebg-preview.png'
}

const knight = {
    'name': 'Drystan the defender',
    'class': 'Knight',
    'Abillities': 'Bravery, Hope, Heroic',
    'History': '...',
    'imageUrl': 'images/knight-removebg-preview.png'
}

const hunter = {
    'name': 'Leona the Lonebow',
    'class': 'Hunter',
    'Abillities': 'Precision, Loyal to the wilds, Falcons eye',
    'History': '...',
    'imageUrl': 'images/hunter-removebg-preview.png'
}

const characters = [wizard, knight, hunter];
let lastCharacterIndex = -1;
//We set an index placement of -1 to begin outside of the randomIndex index calculation
//And later reassign it. But for now it just works as a starting value in order to compare index placements in the loop later.

function generateCharacter() {
    let randomIndex;
    do { //do while loop which executes code at least once, and repeats if condition is true
        randomIndex = Math.floor(Math.random() * characters.length);
        //We generate a random character with math random
        // * it with characters.length in order to be able to randomize between all the array values.
    } while (randomIndex === lastCharacterIndex);
    //It runs the loop every time our randomIndex is the same as the last index placement.
    //So it does the randomIndex, while this "while" condition is true

    lastCharacterIndex = randomIndex; //We reassign the lastCharacterIndex with the newly generated one
    //from the randomIndex, so we start at -1 to stay out of the index placement at first
    //But then when the loop runs and a new random index is chosen, we give that to the randomIndex
    //In order to update it constantly and generate a new character each time.

    const randomCharacter = characters[randomIndex];
    //We take the array with the values, and get one of the characters, based on our randomIndex
    //So we first make calculations to generate a random index and then we use that index to get a specific character
    //That has the index placement in the array.
    const characterInfo = document.createElement("div");
    //Dynamically create a div with the info about a character
    characterInfo.textContent = `Name: ${randomCharacter.name}, Class: ${randomCharacter.class},
    Abillities: ${randomCharacter.Abillities}`;
    //Here we use textContent to return the text content of an element.
    //We simply just add content to the characterInfo, where we use the random generation of a character
    //And dynamically load that objects/that characters info
    //We add a , between the abillities
    const characterImage = document.createElement('img');
    characterImage.src = randomCharacter.imageUrl;
    characterImage.alt = randomCharacter.name;
    //We simply just make a new dynamic element, an img tag and provide it the img and an alt text.
    const characterContainer = document.getElementById('character_container');
    characterContainer.innerHTML = ""; //Clear the container to avoid overlapping elements
    characterContainer.appendChild(characterInfo);
    characterContainer.appendChild(characterImage);
    //appendChild appends an element as the last child of an element, meaning we add to the container
}