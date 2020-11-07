var express = require('express');
var app = express();

// GET / handler
app.get('/', function (req, res) {

    // get the incoming barcode sent from Orca Scan (scanned by a user)
    var barcode = req.query.barcode;

    // TODO: query a database or API to retrieve some data based on barcode value

    // create an object with data to return (property names must match Orca column names)
    var dataToReturn = {
        Vin: barcode,
        Make: 'SUBARU',
        Model: 'Legacy',
        'Manufacturer Name': 'FUJI HEAVY INDUSTRIES U.S.A',
        'Vehicle Type': 'PASSENGER CAR',
        Year: 1992
    };

    // return data to Orca as a JSON object
    res.json(dataToReturn);
});

// start the server on port 5000
app.listen(5000);