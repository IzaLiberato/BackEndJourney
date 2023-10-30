/*var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'O evento ocorreu!');*/

//outro exemplo

var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu]

people.forEach(function(Person){
    Person.on('diz', function(mssg){
        console.log(Person.name + ' diz: ' + mssg);

    })

});

james.emit('diz', 'Hey dudes!');
mary.emit('diz', 'Olá, boa tarde!')
