module.exports = filter;

var fs = require('fs');
var path = require('path');

function filter(filePath, ext, functionCall){

	fs.readdir(filePath, function (err, files){

		if (err) {
			return functionCall(err);
		}

		var filteredList = [];

		files.forEach(function (element, index, array) {
			if (path.extname(element) == "." + ext) {
				console.log(element);
				filteredList.push(element.toString());
			}
		});

		return functionCall(null, filteredList);
	});
}

