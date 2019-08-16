'use strict';
var s = 'Hello';

function greet(name){
    console.log(s + ',' + name + '!');
}

function Hi(name){
    console.log('Hi' + ',' + name + '!');
}

function goodbye(name){
    console.log('Goodbye' + ',' + name + '!') ;
}

module.exports = {
    greet: greet,
    Hi : Hi,
    goodbye:goodbye
}
