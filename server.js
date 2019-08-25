// New Request Header Parser Microservice Project by Yasmin Melean 23/08/2019
// init project
const express = require('express');
const app = express();

// Require CORS to allow FCC the remote testing of the API.
// More about Cors: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing.
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); // Some legacy browsers (IE11, various SmartTVs) choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function(req, res) {
  console.log(req.headers);
  const ip = req.headers['x-forwarded-for'].split(',')[0];
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.json({"ipaddress": ip, "language": language, "software": software});
});

// Starts the server and listens for requests in PORT
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app Request Header Parser is listening on port ' + listener.address().port);
});
