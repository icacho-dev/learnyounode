//console.log(process.argv + "\n\n ---------------------------");
var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var filter = ("."+process.argv[3])

fs.readdir(folder, function (err, list) {
  if (err) throw err;
  list.reverse()
  for (var i = (list).length - 1; i >= 0 ; i--) {
  	if(path.extname(list[i]).toString() == filter.toString())
  		console.log( list[i]);
  };
});
/*
    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/