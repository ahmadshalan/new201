
'use strict';

let score = 0;

function question1() {
    let name = prompt('what is your name?');


    alert('welcome' + ' [' + name + ']!' + ' ' + 'let us play a game');

    let myName = prompt('is my name Ahmad?').toLowerCase();


    if (myName == 'yes' || myName == 'y') {

        alert('you are right')
        score++;



    } else {

        alert('you are wrong, my name is ahmad')
    }

    console.log(myName);
}
question1();

function question2() {
    let age = prompt('am I 35?').toLocaleLowerCase();

    if (age == 'yes' || age == 'y') {

        alert('you are wrong I am 32')


    } else if (age == 'no' || age == 'n') {
        alert('you are right')
        score++;

    } else {

        alert('please answer yes or no')
    }
    console.log(age);
}
question2();


function question3() {
    let Proffesion = prompt('Am I an Electrical Engineer?').toLocaleLowerCase();

    if (Proffesion == 'yes' || Proffesion == 'y') {

        alert(' you are right')
        score++;

    } else {

        alert('you are wrong, I am an electrical engineer')
    }

    console.log(Proffesion);
}
question3();

function question4() {
    let children = prompt('how many child do I have?').toLocaleLowerCase();

    if (children == 1) {
        alert('you are right')
        score++;

    } else {
        alert('you are wrong, I have one')
    }

    console.log(children);
}
question4();


function question5() {
    let university = prompt('Did I Study at J.U.S.T university?').toLocaleLowerCase();

    if (university == 'yes' || university == 'y') {

        alert('you are right')
        score++;

    } else {
        alert('you are wrong, I did')

    }

    console.log(university);


    alert('let us go' + ' ' + name + '!')
}
question5();



function question6() {
    for (let i = 0; i <= 5; i++) {


        let old = prompt('how old I am?');


        if (old < 28) {

            alert('you are too low, try again')
        } else if (old > 40) {

            alert('you are too high, try again')
        } else if (old > 32 && old < 40) {
            alert('you are close , try again')

        } else if (old == 32) {

            alert('good answer');
            score++;

            break;
        }
    }
}
question6();






let movies = ['Godfather', 'Godfather 2', 'Godfather 3', 'the message', 'greenmile', 'the dark knight', 'joker', 'Inception']


for (let i = 0; i <= 6; i++) {


    let ans = prompt('what is my favourite movie?');


    for (let j = 0; j <= movies.length; j++) {
        if (ans == movies[j]) {

            alert('good job');

            i=7;
            score++;
            break;

        } 
    }
}

alert(`my favourite movies are: ${movies}`);

alert('Thank you for playing, you have got :' + score + 'out of 7');


























