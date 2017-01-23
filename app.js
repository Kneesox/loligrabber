var downloadImage = require('download-image');
var request = require('request');
var url = 'http://lolwaleet.com/Loli/';

function lolis() {
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    downloadImage('http://i.imgur.com/'+ body.substring(1359,1370), __dirname+'\\loli\\'+body.substring(1359,1370));
		}
	})
}
setInterval(lolis, 200);
console.log("Made by Kneesox#0461")
