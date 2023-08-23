var Transform = require("stream").Transform;

var toUpper = new Transform({
  transform: function (buffer, encoding, next) {
    next(null, buffer.toString().toUpperCase());
  },
});

process.stdin.pipe(toUpper).pipe(process.stdout);
