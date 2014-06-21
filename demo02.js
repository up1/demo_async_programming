var FS = require('fs'),
    request = require('request');

function getResults(pathToFile, callback) {
    FS.readFile(pathToFile, 'utf8', function(err, data) {
        if (err) return callback(err);
        var response1, response2;

        request.post('http://www.thomas-bayer.com/sqlrest/', function(err, response, body) {
            if(err) return callback(err);
            response1 = response;
            next();
        }); 

        request.post('http://www.thomas-bayer.csom/11111', function(err, response, body) {
            if(err) return callback(err);
            response2 = response;
            next();
        });         

        function next(){
            if(response1 && response2){
                callback(null, [response1, response2]);
            }
        }
    });
}

getResults('./www/mydata.json', function(err, content) {
    if (err) {
        console.error("Got an error", err);
    } else {
        console.log("Got result ");
    }
});