
'use strict'

let name= prompt('what is your name?');


alert('welcome'+' [' + name +']!'+' ' +'let us play a game');

let myName= prompt('is my name Ahmad?').toLowerCase();


if (myName=='yes'|| myName =='y'){

    alert('you are right')
}else{

    alert('you are wrong, my name is ahmad')
}

console.log(myName);


let age = prompt('am I 35?').toLocaleLowerCase();

if (age == 'yes' || age =='y'){

    alert('you are wrong I am 32')


}else if(age == 'no' || age =='n'){ 
    alert ('you are right')

}else{

    alert('please answer yes or no')
}
console.log(age);


let Proffesion = prompt ('Am I an Electrical Engineer?').toLocaleLowerCase();

if (Proffesion == 'yes' || Proffesion == 'y'){

    alert(' you are right')

}else{

    alert('you are wrong, I am an electrical engineer')
}

console.log(Proffesion);

let children = prompt ('how many child do I have?').toLocaleLowerCase();

if (children == 1){
     alert('you are right')

}else{
    alert('you are wrong, I have one')
}

console.log(children);

let university = prompt ('Did I Study at J.U.S.T university?').toLocaleLowerCase();

if (university == 'yes' || university =='y'){

    alert('you are right')

}else{
    alert('you are wrong, I did')

}

console.log(university);

alert('let us go'+' '+ name + '!')










