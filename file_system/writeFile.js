const fs = require("fs");

fs.writeFile("logs/hello.log", "hello~ \n", (error) => {
	if(error) {
		console.log(error);
	} else {
		console.log("创建文件成功啊!");
	}
});   

fs.appendFile("logs/hello.log", "您好~ \n", (error) => {
	if(error) {
		console.log(error);
	} else {
		console.log("追加内容成功啊!");
	}
});