//modo sincrono, ele trava o codigo
/*var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe)

fs.writeFileSync('writeMe.txt', readMe);*/

//modo assicrono, executa o que vem abaixo mesmo com o readfile ainda esteja lendo o arquivo

/*var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('teste')*/

var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    console.log('Arquivo lido com sucesso.');
    fs.writeFile('writeMe.txt', data, function(err) {
        console.log('Arquivo escrito com sucesso.');
    });
});

console.log('Teste para mostrar que é assicrono. Sem bloqueio.');