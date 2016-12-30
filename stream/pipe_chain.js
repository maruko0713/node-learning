const fs = require("fs");
const zlib = require("zlib");

var fileReadStream = fs.createReadStream("data.json");
var fileWriteStream = fs.createWriteStream("data-2.json.gz");

fileWriteStream.on("pipe", (source) => {
	console.log(source);
})

fileReadStream
  .pipe(zlib.createGzip())
  .pipe(fileWriteStream)
