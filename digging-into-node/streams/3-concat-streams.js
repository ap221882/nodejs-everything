var concat = require("concat-stream");
var http = require("http");
var qs = require("querystring");

// process.stdin.pipe(
//   concat(function (body) {
//     console.log(body.length);
//   })
// );
//> node "file" then type words press enter and enter and at last press ctrl+D
//* ctrl D from stdin, we tell the program that youre finished typing
//* ctrl C is used to kill the program

var server = http.createServer((req, res) => {
  req.pipe(
    concat({ encoding: "string" }, (body) => {
      // console.log(body.length);
      var params = qs.parse(body);
      console.log(params);
      res.end("ok\n");
    })
  );
});
//> run -> curl -d msg=hello localhost:8000
ok;

server.listen(8000);
