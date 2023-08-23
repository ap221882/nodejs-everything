var concat = require("concat-stream");
var http = require("http");

process.stdin.pipe(
  concat(function (body) {
    console.log(body.length);
  })
);
//> node "file" then type words press enter and enter and at last press ctrl+D
//* ctrl D from stdin, we tell the program that youre finished typing
//* ctrl C is used to kill the program
