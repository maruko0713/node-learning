const fs = require("fs");

// 读取目录下文件并且删除
fs.readdirSync("logs").map((file) => {
	fs.unlink(`logs/${file}`, (error) => {
		if(error) {
			console.log(error); 
		} else {
			console.log(`成功删除文件: ${file}`);
		}
	})
});

fs.rmdir("logs", (error) => {
    if(error) {
    	console.log(error);
    } else {
    	console.log("删除目录成功!");
    }
})