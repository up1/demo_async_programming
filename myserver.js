express = require('express')
app = express();
app
      .use(express.compress())
      .use(express.static(__dirname + "/www/"))

app.listen(1234, function (err) {
    if (err)
      return console.log(err);
    console.log('Ready at 1234');
  });