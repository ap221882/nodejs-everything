var concat = require("concat-stream");
var http = require("http");
var qs = require("querystring");
var through = require("through2");

// process.stdin.pipe(
//   concat(function (body) {
//     console.log(body.length);
//   })
// );
//> node "file" then type words press enter and enter and at last press ctrl+D
//* ctrl D from stdin, we tell the program that youre finished typing
//* ctrl C is used to kill the program

var server = http.createServer((req, res) => {
  req.pipe(counter()).pipe(
    concat({ encoding: "string" }, (body) => {
      // console.log(body.length);
      var params = qs.parse(body);
      console.log(params);
      res.end("ok\n");
    })
  );

  function counter() {
    var size = 0;
    return through((buffer, encoding, next) => {
      size += buffer.length;
      if (size > 20) {
        res.end("BIG");
        // next(null, null);
      } else {
        next(null, buffer);
      }
    });
  }
});
//> run -> curl -d msg=hello localhost:8000

server.listen(8000);
