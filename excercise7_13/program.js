var http = require('http')

http.get(process.argv[2], function (res) {
	res.setEncoding('utf8')
	res.on('data',function (chunk) {
		console.log(chunk)
	})
})
/*
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
*/