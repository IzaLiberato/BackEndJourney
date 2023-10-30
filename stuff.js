/*var counter = function(arr){
    return 'Aqui temos ' + arr.length + ' elementos em um array';

};

var adder = function(a,b){
    return `A soma dos 2 números é ${a+b}`;

};

var pi = 3.142;


module.exports.counter = counter; 
module.exports.adder = adder;
module.exports.pi = pi;
*/

//criando varios modulos e exportando-os

/*outro modo

module.exports.counter = function(arr){
    return 'Aqui temos ' + arr.length + ' elementos em um array';

};

module.exports.adder = function(a,b){
    return `A soma dos 2 números é ${a+b}`;

};

module.exports.pi = 3.142; */

//outro modo

var counter = function(arr){
    return 'Aqui temos ' + arr.length + ' elementos em um array';

};

var adder = function(a,b){
    return `A soma dos 2 números é ${a+b}`;

};

var pi = 3.142;


module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
}

