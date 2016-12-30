const http = require("http");

var options = {
    protocol: "http:",
    hostname: "api.douban.com",
    port: "80",
    method: "get",
    path: "/v2/movie/top250"
};

var request = http.request(options, (response) => {
	console.log(response.statusCode);
	console.log(response.headers);
});

request.on("error", (error) => {
	console.log(error);
});

request.end();
