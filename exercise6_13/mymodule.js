module.exports = function(directory, fileType, callback) {
    var fs = require("fs");
    var path = require("path");
    var files = [];

    fs.readdir(directory, function(err, list) {
        if(err) {
            return callback(err);
        } else {
            for(var i=0; i<list.length; i++) {
                if(path.extname(list[i]) === "." + fileType) {
                    files.push(list[i]);
                }
            }
        }
        return callback(err, files);
    });
};