var fs = require("fs");
var path = require("path");
var through = require("through2");

//>PIPE
// fs.createReadStream(path.join(__dirname, "../exercises/files/lorem.txt")).pipe(
//   process.stdout
// );

//> Process the buffer data

process.stdin.pipe(through(write)).pipe(process.stdout);

function write(buffer, encoding, next) {
  //> what is returned from the buffer
  //# one way
  next(null /* > error */, buffer.toString().toUpperCase());
  // # second way
  this.push(buffer.toString().toUpperCase());
  next();
}
