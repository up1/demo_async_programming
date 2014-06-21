var fs = require("fs");

fs.readFile("./www/mydata.json", function(err, content) {
    if (err) {
        console.error("Got an error", err);
    } else {
        console.log("Got result");
    }
});

console.log("After call readFile")