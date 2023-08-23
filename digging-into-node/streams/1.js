var fs = require("fs");
var path = require("path");
var through = require("through2");

//>PIPE
// fs.createReadStream(path.join(__dirname, "../exercises/files/lorem.txt")).pipe(
//   process.stdout
// );

//> Process the buffer data

fs.createReadStream(process.argv[2]).pipe(through(write)).pipe(process.stdout);

function write(buffer, encoding, next) {
  //> what is returned from the buffer
  next(null /* > error */, buffer.toString().toUpperCase());
}
