var FS = require('fs'),
    Q = require('q');

Q.nfcall(FS.readFile, "./www/mydata.json", "utf-8")
.then(function(data) {      
    console.log('File has been read:', data);
})
.fail(function(err) {
    console.error('Error received:', err);
})
.done();