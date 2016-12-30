const fs = require("fs");

var fileReadStream = fs.createReadStream("data.json");
var fileWriteStream = fs.createWriteStream("data-2.json");

fileReadStream.pipe(fileWriteStream);