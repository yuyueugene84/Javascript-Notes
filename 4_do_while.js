do {
    console.log('Exit if yes: ');
    var choice = prompt('please enter y / n:');
    console.log('you have chosen:' + choice);
} while(choice !== 'y');

console.log('I\'m out!');