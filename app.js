/*setTimeout(function(){ #funcao conta 3 segundos e devolve a saida

    console.log('Passaram-se 3 segundos ;)');

},3000);*/

/*var time = 0;

setInterval(function(){ #função conta de 2 em 2
    
    time += 2;
    console.log(time +' segundos se passaram');

},2000);*/

/*var counter = require('./count'); #esse exemplo era para apenas 1 modulo

console.log(counter(['shaun','crystal','ryu', 'iza']));*/

var stuff = require('./stuff');

console.log(stuff.counter(['um','dois','tres']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));

