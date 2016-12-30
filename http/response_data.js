const http = require("http");

var options = {
    protocol: "http:",
    hostname: "api.douban.com",
    port: "80",
    method: "get",
    path: "/v2/movie/top250"
};

var responseData;

var request = http.request(options, (response) => {
	response.setEncoding("utf8")
	response.on("data", (chunk) => {
      responseData += chunk;
	});
    response.on("end", () => {
      JSON.parse(responseData).subjects.map((item) => {
      	console.log(item);
      });
    })
});

request.on("error", (error) => {
	console.log(error);
});

request.end();
