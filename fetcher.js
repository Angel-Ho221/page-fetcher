const fs = require('fs');
const request = require('request');

request(process.argv[2], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(process.argv[3], body, function (err) {
    // let stats = fs.statSync("index.html")
    // let bytesSize = stats["size"]; 1256bytes
    let bytesSize = body.length;

    if (err) return console.log(err);
    console.log(`Downloaded and saved ${bytesSize} bytes to ${process.argv[3]}`); //this needs to be changed to what the assignment wants
  });
});