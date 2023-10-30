var fs = require('fs');

fs.unlink('writeMe.txt', function(err,data){
    console.log('Arquivo Excluído');
});