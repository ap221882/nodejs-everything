var fs = require("fs");
var path = require("path");

//>PIPE
fs.createReadStream(path.join(__dirname, "../exercises/files/lorem.txt")).pipe(
  process.stdout
);
