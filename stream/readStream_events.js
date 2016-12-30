const fs = require("fs");

var fileReadStream = fs.createReadStream("dat.json"),
    count=0;

fileReadStream.once("data", (chunk) => {
	console.log(chunk.toString());
});
   
fileReadStream.on("data", (chunk) => {
	console.log(`${++count} 接收到: ${chunk.length}`);
	console.log(count);
});

fileReadStream.on("end", () => {
	console.log("结束啦!");
});

fileReadStream.on("error", (error) => {
	console.log(error);
});


