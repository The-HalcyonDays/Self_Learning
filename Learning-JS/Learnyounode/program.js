var http = require('http')

getURL = process.argv[2]

//http.get(getURL, function (response) {
//	console.log(response)
//}).setEncoding('utf8').onerror(err){
//
//}



http
	.get(getURL, function(response) {
		//console.log("Got response: " + response.statusCode);
		response.on("data", function (data) {
			console.log(data);
		})
	}
).setEncoding('utf8');