const fs = require("fs");

var fileReadStream = fs.createReadStream("data.json"),
    count=0;

fileReadStream.once("data", (chunk) => {
	console.log(chunk.toString());
});
   
fileReadStream.on("data", (chunk) => {
	console.log(`${++count} 接收到: ${chunk.length}`);
	console.log(count);
});



