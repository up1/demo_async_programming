var FS = require('fs'),
    Q = require('q'),
    request = require('request');

function getResults(pathToFile) {   
    return Q.nfcall(FS.readFile, pathToFile, "utf-8")
    .then(function(repo) {
        var options = { headers: {'User-Agent': 'MyAgent'} }; 
        return [Q.nfcall(request, 'https://api.github.com/repos/'+repo+'/collaborators', options),
                Q.nfcall(request, 'https://api.github.com/repos/'+repo+'/commits', options)];
    })
    .spread(function(collaboratorsRes, commitsRes) {        
        return [collaboratorsRes[1], commitsRes[1]];
    })
    .fail(function(err) {
        console.error(err)
        return err;
    });
}

// actual call
getResults('repos.txt').then(function(responses) {
    console.log("responses=" + responses)
});