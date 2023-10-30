var fs = require('fs');

fs.mkdir('stuff2', function(err, data){
    console.log('Arquivo Criado');
});

fs.rmdir('stuff2', function(err, data){
    console.log('Arquivo Apagado');
});

