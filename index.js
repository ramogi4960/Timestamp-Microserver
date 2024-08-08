// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const days = [
    "Sun", "Mon", "Tue", "Wed",
    "Thu", "Fri", "Sat"
];

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// if the api field is empty
app.get("/api/", (req, res) => {
    let theDate = new Date();
    res.json(
        {
            "unix": theDate.getTime(),
            "utc": `${days[theDate.getDay()]}, ${theDate.getDate().toString().padStart(2, "0")} ${months[theDate.getMonth()]} ${theDate.getFullYear()}` +
            ` ${theDate.getHours().toString().padStart(2, "0")}:${theDate.getMinutes().toString().padStart(2, "0")}:${theDate.getSeconds().toString().padStart(2, "0")} GMT`
        }
    );
});


// your first API endpoint... 
app.get("/api/:data", function (req, res) {
    let theDate;
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
