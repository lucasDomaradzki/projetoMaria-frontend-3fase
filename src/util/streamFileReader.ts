let fs = require('fs');
let arquivo = 'arquivo.txt';

fs.createReadStream(arquivo)

    .pipe(fs.createWriteStream('files/' + arquivo))

    .on('finish', function () {
        console.log('Upload concluido com sucesso');
    });