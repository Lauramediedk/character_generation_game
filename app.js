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