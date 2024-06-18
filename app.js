const typewriterText = 'You arrive at the old tavern where you meet your buddies for a beer\nWhen you enter the tavern the inn keeper looks at you and asks you...'

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
    setTimeout(() => typeWriter(elementId, text, i), 90); //Timeout effekt for at danne skrive effekten,
    //hvor typeWriter kalder på sig selv, med en forsinkelse på 150 sekunder
    }
}

//Start effekten og vi tilføjer parametre til vores funktions argumenter
typeWriter("typeText", typewriterText); //typeText er vores html ID og det andet, vores text fra vores const