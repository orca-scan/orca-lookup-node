# orca-lookup-node

This open source project is a an example of [how to scan barcodes using a smartphone](https://orcascan.com/mobile) and [present data from your system](https://orcascan.com/docs/api/lookup-url) using [Express](https://expressjs.com/) and [Node.js](https://nodejs.org/en/about/).

**How it works:**

1. A user [scans a barcode](https://orcascan.com/mobile) using their smartphone
2. Orca Scan sends a HTTP GET request to your endpoint with `?barcode=value`
3. Your system queries a database or internal API for a `barcode` match
4. Your system returns the data in JSON format with keys matching column names
5. The [Orca Scan mobile](https://orcascan.com/mobile) app presents that data to the user

*If the mobile user has [update permission](https://orcascan.com/docs/getting-started/adding-users#selecting-user-permissions) and saves the data, it will saved to your Orca sheet.*

## Install

First ensure you have [Node.js](https://nodejs.org/en/download/) installed.

```bash
# should return 11 or higher
node -v
```

Then execute the following:

```bash
# download this example code
git clone https://github.com/orca-scan/orca-lookup-node.git

# go into the new directory
cd orca-lookup-node

# install dependencies
npm install
```

## Run

```bash
# start the project
npm start
```

Visit [http://localhost:5000?barcode=4S3BMHB68B3286050](http://localhost:5000?barcode=4S3BMHB68B3286050) to see the following:

```json
{
    "VIN": "4S3BMHB68B3286050",
    "Make": "SUBARU",
    "Model": "Legacy",
    "Manufacturer Name": "FUJI HEAVY INDUSTRIES U.S.A",
    "Vehicle Type": "PASSENGER CAR",
    "Year": 1992
}
```

## How this example works

One of the great things about node/express is that you can setup and respond to an incoming HTTP request in just a few lines of code. This example below accepts a HTTP GET request with `barcode` as a query string parameter and returns some data:

```js
app.get('/', function (req, res) {

    // get the incoming barcode sent from Orca Scan (scanned by a user)
    var barcode = req.query.barcode;

    // TODO: query a database or API to retrieve some data based on barcode value

    // create an object to return (property names must match column names)
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
```

**Please note:** JSON keys must match Orca column names, otherwise your data will not appear in the app

## Troubleshooting

If you run into any issues please [open a ticket](https://github.com/orca-scan/orca-lookup-node/issues) and we'll get back to you as soon as we can.

## Examples in other langauges
* [orca-lookup-dotnet](https://github.com/orca-scan/orca-lookup-dotnet)
* [orca-lookup-go](https://github.com/orca-scan/orca-lookup-go)
* [orca-lookup-python](https://github.com/orca-scan/orca-lookup-python)
* [orca-lookup-php](https://github.com/orca-scan/orca-lookup-php)
* [orca-lookup-java](https://github.com/orca-scan/orca-lookup-java)

## History

For change-log, check [releases](https://github.com/orca-scan/orca-lookup-node/releases).

## License

Licensed under [MIT License](LICENSE) &copy; Orca Scan, the [Barcode Scanner app for iOS and Android](https://orcascan.com).
